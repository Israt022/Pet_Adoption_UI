import { Trash } from "lucide-react";
import defaultImage from "../../assets/defaul_pet_img.jpeg";

const CartItemList = ({ items , handleRemoveItem}) => {
    console.log("Cart Items:", items);
    console.log("Cart items with pets:", items.map(i => i.pet));
    
    if (items?.length === 0) {
        return (
        <div className="py-6 text-center text-gray-500">Your cart is empty</div>
        );
    }
    
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>

            <div className="overflow-x-auto border border-base-200 bg-gray-950 rounded-md p-2">
                <table className="table w-full">
                <thead>
                    <tr>
                    <th className="text-left px-4 py-2 gap-5 text-gray-50">Pet</th>
                    <th className="text-right px-4 py-2 text-gray-50">Price</th>
                    {/* <th>Quantity</th> */}
                    <th className="text-right px-4 py-2 text-gray-50">Total</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                    <tr 
                        key={item.id}
                        className=""
                    >
                        <td className="font-medium flex items-center gap-4 px-4 py-2 ">
                        <img 
                            src={item.pet?.images?.length > 0 ? item.pet.images[0].image : defaultImage}
                            alt={item.name} 
                            className="w-24 h-24 rounded-md" 
                        />
                            <span>
                                {item.pet.name} 
                            </span>
                        </td>
                        <td className="text-right">
                            ${item.pet.cost}
                        </td>
                        
                        <td className="text-right font-medium">
                            {item.total_price}
                        </td>
                        <td>
                        <button
                            className="btn btn-ghost btn-xs btn-circle"
                            aria-label={`Remove ${item.name} from cart`}
                            onClick={() => handleRemoveItem(item.id)}
                        >
                            <Trash className="h-4 w-4" />
                        </button>
                        </td>
                    </tr>
                    ))} 
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartItemList;