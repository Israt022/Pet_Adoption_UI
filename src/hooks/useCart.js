import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const [authToken] = useState(
        () => JSON.parse(localStorage.getItem("authTokens"))?.access
    );
    
    const [cart,setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
    const [loading, setLoading] = useState(false);

    // Create a new cart 
    const createOrGetCart = useCallback(
        async() => {
            setLoading(true);
            try {
                // console.log('Tokens : ',authToken);
                const response = await authApiClient.post('/carts/');
                if (!cartId) {
                    localStorage.setItem("cartId", response.data.id);
                    setCartId(response.data.id);
                }
                setCart(response.data);
            } catch (err) {
                if (
                    err.response &&
                    err.response.data === "User already has a cart"
                    ) {
                    console.warn("Cart already exists, skipping create.");
                    } else {
                    console.error("Create cart failed:", err);
                    }
            }finally{
                setLoading(false);
            }
        },[cartId]);

    // Add items to the cart 
    const AddCartItems = useCallback(
        async(pet_id) => {
            setLoading(true);
            console.log("Cart ID:", cartId);   
            console.log("Pet ID:", pet_id);   
            if (!cartId) await createOrGetCart();
            try {
                const response = await authApiClient.post(
                    `/carts/${cartId}/items/`, 
                    {pet_id},
                )
                return response.data;
            } catch (error) {
                console.log('Error adding items!',error);
            }finally{
                setLoading(false);
            }
        },
    [cartId,createOrGetCart])

    // Delete Cart Items
    const deleteCartItems = useCallback(
        async (itemId) => {
        try {
            await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        } catch (error) {
            console.log(error);
        }
        },
        [cartId]
    );

    useEffect(() => {
        const initializeCart = async () => {
            setLoading(true);
            await createOrGetCart();
            setLoading(false);
        };
        initializeCart();
    }, [createOrGetCart]);

    return { 
        cart , 
        loading,
        cartId,
        createOrGetCart , 
        AddCartItems,
        deleteCartItems,
    };
};

export default useCart;