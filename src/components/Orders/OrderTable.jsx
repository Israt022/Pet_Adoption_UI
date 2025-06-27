import OrderItems from "./OrderItems";

const OrderTable = ({items}) => {
    return (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-300 border-b">
                <th className="px-4 py-3 text-left text-gray-700">Pet</th>
                <th className="px-4 py-3 text-right text-gray-700">Price</th>
                <th className="px-4 py-3 text-right text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                // Order Items
                <OrderItems
                    key={item.id}
                    item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
    );
};

export default OrderTable;