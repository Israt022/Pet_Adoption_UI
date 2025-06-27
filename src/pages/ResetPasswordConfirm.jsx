import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import ErrorAlert from "../components/ErrorAlert";

const ResetPasswordConfirm = () => {
    const {confirmPasswordReset,errorMsg} = useAuthContext();

    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();
    const {
        register ,
        handleSubmit, 
        watch,
        formState : {errors}
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute top-1/2 right-2 transform -translate-y-1/2"
    >
    {showPassword ? "Hide" : "Show"}
    </button>


    const { uid, token } = useParams();
    

    const onSubmit = async ({new_password}) => {
        const res = await confirmPasswordReset({uid, token, new_password});
        if (res.success) {
            setSuccessMsg(res.message);
            setTimeout(() => navigate("/login"), 3000);
        };
    }

    return (
        <div className="max-w-md mx-auto card bg-base-100 shadow p-6 mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
            {errorMsg && <ErrorAlert error={errorMsg} />}
            {successMsg && <p className="text-success">{successMsg}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">New Password</label>
                <input
                  {...register("new_password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="input input-bordered w-full mb-4"
                />
                {errors.new_password && (
                <span className="text-error">{errors.new_password.message}</span>
                )} 

                {/* Confirm Password  */}
                
                  <div className="form-control mb-4">
                    <label className="label">Confirm New Password</label>
                    <div className="relative">
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="input input-bordered bg-base-200 w-full pr-10"
                        {...register("confirm_new_password", {
                            required: "Please confirm your new password",
                            validate: (value) =>
                            value === watch("new_password") || "Passwords do not match",
                        })}
                        />
                    </div>
                    {errors.confirm_new_password && (
                        <p className="text-error text-sm mt-1">
                        {errors.confirm_new_password.message}
                        </p>
                    )}
                </div>
                <div className="form-control mb-4">
                    <label className="label cursor-pointer">
                        <span className="label-text">Show Password</span>
                        <input
                        type="checkbox"
                        className="toggle"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        />
                    </label>
                </div>
                 
                <button type="submit" className="btn btn-warning w-full">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;