import { Link } from "react-router";

const ProfileButtons = ({ isEditing, setIsEditing, isSubmitting }) => {
  return (
    <div>
        <div className="flex justify-center pt-4">
        {isEditing ? (
            <div className="space-x-4">
            <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-8 rounded"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
            <button
                type="button"
                className="btn btn-outline"
                onClick={() => setIsEditing(false)}
            >
                Cancel
            </button>
            </div>
        ) : (
            <div
                className="flex justify-between gap-6 w-full"
            >
                <div>
                    <button
                        type="button"
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-8 rounded"
                        onClick={() => setIsEditing(true)}
                    >
                        Update Profile
                    </button>
                </div>
                <div>
                    <Link
                        to='/dashboard/profile'
                    >
                        <button
                        type="button"
                        className="btn btn-link p-0 justify-start text-warning font-semibold h-auto min-h-0"
                    >
                        Go Back
                    </button>
                    </Link>
                </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default ProfileButtons;

// const ProfileButtons = ({ setIsEditing }) => {
//   return (
//     <div className="text-center mt-6">
//       <button
//         type="button"
//         onClick={() => setIsEditing(true)}
//         className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
//       >
//         Edit Profile
//       </button>
//     </div>
//   );
// };

// export default ProfileButtons;
