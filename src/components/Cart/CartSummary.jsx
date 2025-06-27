import authApiClient from "../../services/auth-api-client";

const CartSummary = ({totalPrice, itemCount, cartId}) => {
    const shipping = itemCount == 0 || parseFloat(totalPrice) > 100 ? 0 : 10;
    const tax = parseFloat(totalPrice) * 0.1;
    const orderTotal = parseFloat(totalPrice) + shipping + tax;

    const deleteCart = () => {
        localStorage.removeItem("cartId");
    };

    const createOrder = async () => {
        try {
        const order = await authApiClient.post("/orders/", { cart_id: cartId });
        console.log(order);
        if (order.status === 201) {
            deleteCart();
            alert("Order placed successfully");
        }
        } catch (error) {
        console.log(error);
        }
    };


    return (
        <div className="card border border-base-200 bg-gray-800">
            {/* Sidebar Summary */}
            <div className="card-body">
                {/* Cart Totals */}
                <tbody>
                <tr>
                    <h2 className="text-xl font-bold mb-4 ">Order Summary</h2>
                </tr>
                </tbody>
                <div className="bg-black rounded p-4">
                    
                    <h3 className="font-bold text-lg mb-4">Cart Total</h3>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Cart Subtotal {itemCount} Pet</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Tax</span>
                        <span>-${tax.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Cart Total</span>
                        <span>${orderTotal.toFixed(2)}</span>
                    </div>
                </div>
                <div className="card-actions justify-end mt-4">
                <button
                    disabled={itemCount === 0}
                    onClick={createOrder}
                    className="btn btn-neutral w-full rounded-full"
                >
                    Checkout
                </button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;