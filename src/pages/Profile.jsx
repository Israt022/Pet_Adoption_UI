import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
    // const [isEditing] = useState(false);
    const {user} = useAuthContext()
//     const {
//     setValue,

//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     Object.keys(user).forEach((key) => setValue(key, user[key]));
//   },[user])

    return (
        <div className="card w-full max-w-2xl mx-auto shadow-xl">
            <div className="card-body">
                {/* {errorMsg && <ErroAlert error={errorMsg} />} */}
                {/* <h2 className="card-title text-2xl mb-4 text-center align-middle">Profile</h2> */}
                {/* <div className="flex justify-center ">
                    <h2 className="text-2xl font-semibold">Profile</h2>
                </div> */}
                <form 
                    // onSubmit={handleSubmit(onSubmit)}
                >
                <ProfileForm
                    user={user}
                />

                {/* <PasswordChangeForm
                    errors={errors}
                    register={register}
                    isEditing={isEditing}
                    watch={watch}
                /> */}

                
                </form>
                {/* <ProfileButtons
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    // isSubmitting={isSubmitting}
                /> */}
            </div>
        </div>
    );
};

export default Profile;

// import { useState, useEffect } from "react";
// import ProfileButtons from "../components/Dashboard/Profile/ProfileButtons";
// import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
// import UpdateProfile from "../components/Dashboard/Profile/UpdateProfile";
// import axios from "axios";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     axios.get("/api/profile/", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//     }).then((res) => {
//       setUserData(res.data);
//     });
//   }, []);

//   const handleUpdate = async (formData) => {
//     try {
//       const response = await axios.patch("/api/profile/", formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setUserData(response.data);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Update failed", error);
//     }
//   };

//   if (!userData) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="card w-full max-w-2xl mx-auto shadow-xl mt-6">
//       <div className="card-body">
//         <div className="flex justify-center mb-4">
//           <h2 className="text-2xl font-semibold">Profile</h2>
//         </div>

//         {isEditing ? (
//           <UpdateProfile
//             user={userData}
//             onCancel={() => setIsEditing(false)}
//             onSave={handleUpdate}
//           />
//         ) : (
//           <UpdateProfile user={userData} />
//         )}

//         {!isEditing && (
//           <ProfileButtons
//             isEditing={isEditing}
//             setIsEditing={setIsEditing}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
