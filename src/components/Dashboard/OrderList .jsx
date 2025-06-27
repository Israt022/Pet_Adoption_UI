import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   authApiClient
  //     .get("/orders/")
  //     .then((res) => {
  //       setOrders(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching orders", err);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(() => {
  authApiClient
    .get("/orders/") // fetch all orders
    .then((res) => {
      const allOrders = res.data;
      // If orders are not sorted by date descending, you can sort here by created_at:
      const sortedOrders = allOrders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Get only first 10 latest orders
      const latest10Orders = sortedOrders.slice(0, 5);
      setOrders(latest10Orders);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching orders", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return (
      <div className="flex justify-center my-10">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="lg:grid-cols-2 gap-8">
      {/* Orders Table */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table w-full text-gray-200">
            <thead>
              <tr className="bg-gray-900 text-gray-100">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-400 py-4">
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="bg-gray-800 hover:bg-gray-700">
                    <td>#{order.id}</td>
                    <td>
                        {typeof order.user === 'object'
                          ? order.user.first_name || 'N/A'
                          : `User ID: ${order.user}`}
                    </td>
                    <td>
                      <div className={`badge ${
                        order.status === "Completed"
                          ? "badge-success"
                          : order.status === "Processing"
                          ? "badge-warning"
                          : "badge-info"
                      }`}>
                        {order.status}
                      </div>
                    </td>
                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td>${order.total_price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Task Summary */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Task summaries of recent sprints</h3>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-400">Task summary content would go here...</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
