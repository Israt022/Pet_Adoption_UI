import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import ErrorAlert from "../components/ErrorAlert";

const ForgotPassword = () => {
    const {sendPasswordResetEmail,errorMsg} = useAuthContext();
    const [successMsg, setSuccessMsg] = useState("");
    const {
        register ,
        handleSubmit, 
        formState : {errors}
    } = useForm();
    
    const onSubmit = async ({email}) => {
        const res = await sendPasswordResetEmail(email);
        if (res.success) setSuccessMsg(res.message);
    }

    return (
         <div className="max-w-md mx-auto card bg-base-100 shadow p-6 mt-20 mb-20">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            {errorMsg && <ErrorAlert error={errorMsg} />}
            {successMsg && <p className="text-success">{successMsg}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">Email :</label>
                <input
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your email"
                    className="input input-bordered w-full mb-4"
                />
                {errors.email && (
                    <span className="text-error">{errors.email.message}</span>
                )}
                <button type="submit" className="btn btn-warning w-full">
                    Send Reset Email
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;