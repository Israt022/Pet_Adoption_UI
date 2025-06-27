import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
    const { 
        cart ,
        cartId, 
        createOrGetCart,
        loading,
        deleteCartItems,
     } = useCartContext();
    
    const { errorMsg } = useAuthContext();
     const [localCart, setLocalCart] = useState(cart);

    useEffect(() => {
        if(!cart && !loading) createOrGetCart();
    },[createOrGetCart,cart,loading]);

    useEffect(() => {
        setLocalCart(cart);
    }, [cart]);

    if(loading) return <p>Loading...</p>
    if (!localCart) return <p>No Cart Found</p>;

    const handleRemoveItem = async (itemId) => {
        setLocalCart((prevLocalCart) => {
        const updatedItems = prevLocalCart.items.filter(
            (item) => item.id != itemId
        );

        return {
            ...prevLocalCart,
            items: updatedItems,
            total_price: updatedItems.reduce(
            (sum, item) => sum + item.total_price,
            0
            ),
        };
        });

        try {
            await deleteCartItems(itemId);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                {errorMsg && <ErrorAlert error={errorMsg}/>} 
                <Suspense fallback={<p>Loading...</p>}>
                    <CartItemList
                    items={localCart.items}
                    handleRemoveItem={handleRemoveItem}
                    />
                </Suspense>
                </div>
                <div>
                    <CartSummary
                        totalPrice={localCart.total_price}
                        itemCount={localCart.items.length}
                        cartId={cartId}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;