import BalanceSummary from "./BalanceSummary";
import OrderList from "./OrderList ";
import TotalPets from "./TotalPets";
import UserList from "./UserList";

const StartbarItems = ({ selectedCard }) => {
  const renderSelectedComponent = () => {
    switch (selectedCard) {
      case "Total Pets":
        return <TotalPets />;
      case "Total Orders":
        return <OrderList />;
      case "Users":
        return <UserList />;
      case "Balances":
        return <BalanceSummary />;
      default:
        return (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Welcome</h2>
            <p className="text-gray-300">Please select a section from the dashboard.</p>
          </div>
        );
    }
  };

  return (
    <div className="mt-6">
      {renderSelectedComponent()}
    </div>
  );
};

export default StartbarItems;

// const StartbarItems = ({selectedCard}) => {


    
//     return (
//         <div>
//           <div className=" lg:grid-cols-2 gap-8">
//             {/* Social Traffic */}
//               <div className="bg-gray-800 rounded-lg p-6">
//                 <div className="card-body">
//                 <h3 className="card-title text-lg">Recent Orders</h3>
//                 <div className="overflow-x-auto">
//                   <table className="table w-full text-gray-200">
//                     <thead>
//                       <tr className="bg-gray-900 text-gray-100">
//                         <th>Order ID</th>
//                         <th>Customer</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                         <th>Amount</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="bg-gray-800"> 
//                         <td>#ORD-7245</td>
//                         <td>John Smith</td>
//                         <td>
//                           <div className="badge badge-success">Completed</div>
//                         </td>
//                         <td>Mar 8, 2025</td>
//                         <td>$125.00</td>
//                       </tr>
//                       <tr
//                         className="bg-gray-700"
//                       >
//                         <td>#ORD-7244</td>
//                         <td>Sarah Johnson</td>
//                         <td>
//                           <div className="badge badge-warning ">Processing</div>
//                         </td>
//                         <td>Mar 7, 2025</td>
//                         <td>$89.99</td>
//                       </tr>
//                       <tr className="bg-gray-800">
//                         <td>#ORD-7243</td>
//                         <td>Michael Brown</td>
//                         <td>
//                           <div className="badge badge-info">Shipped</div>
//                         </td>
//                         <td>Mar 7, 2025</td>
//                         <td>$245.50</td>
//                       </tr>
//                       <tr className="bg-gray-700">
//                         <td>#ORD-7242</td>
//                         <td>Emily Davis</td>
//                         <td>
//                           <div className="badge badge-success">Completed</div>
//                         </td>
//                         <td>Mar 6, 2025</td>
//                         <td>$112.75</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               </div>

      
            
//         </div>
//         {/* Task Summaries */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold mb-4">Task summaries of recent sprints</h3>
//             <div className="bg-gray-800 rounded-lg p-6">
//               <p className="text-gray-400">Task summary content would go here...</p>
//             </div>
//           </div>
//       </div>
//     );
// };

// export default StartbarItems;

