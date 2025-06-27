
const OrderItems = ({item}) => {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{item.pet.name}</td>
            <td className="px-4 py-3 text-right text-gray-800">
            ${item.price.toFixed(2)}
            </td>
            <td className="px-4 py-3 text-right text-gray-800">
            ${item.total_price.toFixed(2)}
            </td>
        </tr>    
    );
};

export default OrderItems;