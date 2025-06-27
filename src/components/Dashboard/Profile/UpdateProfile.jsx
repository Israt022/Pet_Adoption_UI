import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PasswordChangeForm from "./PasswordChangeForm";
import ProfileButtons from "./ProfileButtons";
import useAuthContext from "../../../hooks/useAuthContext";
import ErrorAlert from "../../ErrorAlert";

const UpdateProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user , updateUserProfile , changePassword, errorMsg } = useAuthContext();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // Prefill the form when user data is available
  useEffect(() => {
    if (user) {
      setValue("first_name", user.first_name || "");
      setValue("last_name", user.last_name || "");
      setValue("address", user.address || "");
      setValue("phone_number", user.phone_number || "");
    //   setValue("profile_pic", user.profile_pic || "");
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    console.log('Submit data:', data);
    console.log(data);
    try {
      const formData = new FormData();
    //   Profile update
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("address", data.address);
      formData.append("phone_number", data.phone_number);
        // const profilePayload = {
        //     first_name: data.first_name,
        //     last_name: data.last_name,
        //     address: data.address,
        //     phone_number: data.phone_number,
        //     // profile_pic : data.profile_pics,
            
        // };
         if (isEditing && data.profile_pic && data.profile_pic.length > 0) {
            formData.append("profile_pic", data.profile_pic[0]);
          }
          console.log('profile_pic:', watch("profile_pic"));

          console.log('From update page ',data.profile_pic);
        await updateUserProfile(formData)

        // const formData = new FormData();
        //   formData.append("first_name", data.first_name);
        //   formData.append("last_name", data.last_name);
        //   formData.append("address", data.address);
        //   formData.append("phone_number", data.phone_number);

        //   if (data.profile_pics && data.profile_pics[0]) {
        //     formData.append("profile_pic", data.profile_pics[0]); // match Django field name exactly!
        //   }

        //   await updateUserProfile(formData);

        // Password Change
        if (data.current_password && data.new_password) {
            await changePassword({
            current_password: data.current_password,
            new_password: data.new_password,
            });
        }
        } catch (error) {
            console.log(error);
        }
    };


// const onSubmit = async (data) => {
//   console.log(data);

//   const formData = new FormData();
//   formData.append("first_name", data.first_name);
//   formData.append("last_name", data.last_name);
//   formData.append("address", data.address);
//   formData.append("phone_number", data.phone_number);

//   // Append image file
//   if (data.profile_pics && data.profile_pics[0]) {
//     formData.append("profile_pic", data.profile_pics[0]);
//   }

//   try {
//     await updateUserProfile(formData); // send FormData
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log("Current profile_pic:", user?.profile_pic);


  return (
    <div className="card w-full max-w-2xl mx-auto shadow-xl mt-2">
      <main className="bg-gray-700 shadow-md rounded-lg px-12 py-6">
       {errorMsg && <ErrorAlert error={errorMsg}/>} 
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Update Profile</h1>

        <form 
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-black font-semibold">First Name</label>
            <input
              {...register("first_name")}
              className="input input-bordered w-full mt-1 text-black"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold">Last Name</label>
            <input
              {...register("last_name")}
              className="input input-bordered w-full mt-1 text-black"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold">Address</label>
            <textarea
              {...register("address")}
              className="textarea textarea-bordered w-full mt-1 text-black"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold ">Phone Number</label>
            <input
              {...register("phone_number")}
              className="input input-bordered w-full mt-1 text-black"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold">Profile Picture</label>
            <input
              type="file"
              {...register("profile_pic")}
              className="file-input file-input-bordered w-full mt-1 text-black"
              disabled={!isEditing}
            />
          </div>

          {/* Password Change Section */}
          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          {/* Action Buttons */}
          <ProfileButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </main>
    </div>
  );
};

export default UpdateProfile;
