import { Link } from "react-router";

const PaymentSuccess = () => {
    return (
        <div
            className="text-center mt-3 font-extrabold text-gray-200 "
        >
            Payment success return to <Link className="text-yellow-400" to='/dashboard'>Dashboard...!</Link>
        </div>
    );
};

export default PaymentSuccess;