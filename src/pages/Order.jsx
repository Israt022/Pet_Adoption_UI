import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";

const Order = () => {
    const [orders,setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        authApiClient.get("/orders/").then((res) => setOrders(res.data));
    }, []);

    const handleCancelOrder = async(orderId) => {
        try {
            const res = await authApiClient.post(`/orders/${orderId}/cancel/`)
            console.log(res);

            if(res.status === 200){
                setOrders((prevOrder) => 
                    prevOrder.map((order) => order.id === orderId ? {...order, 
                        status : 'Canceled'} : order)
                );
            }
        } catch (error) {
        console.log(error);
        }
    }
    useEffect(() => {
    const fetchOrders = async () => {
        setLoading(true); 
        try {
            const res = await authApiClient.get("/orders/");
            setOrders(res.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false); 
        }
    };

    fetchOrders();
}, []);


    return (
        <div
            className="container mx-auto py-8 px-4"
        >
            {loading ? (
            <div className="flex justify-center mt-16">
                <span className="loading loading-spinner text-yellow-500"></span>
            </div>
            ) : (
            <>
                <h1 
                    className="text-2xl font-bold mb-6"
                >
                    Order Details
                </h1>
                {orders.map((order) => (
                    <OrderCard 
                        key = {order.id} 
                        order = {order} 
                        onCancel = {handleCancelOrder}
                    />
                ))}
                </>
            )}
        </div>
    );
};

export default Order;