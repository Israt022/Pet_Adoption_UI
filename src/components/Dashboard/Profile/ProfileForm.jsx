
import { Link } from 'react-router';
import DefaulPp from '../../../assets/default.png';

const ProfileForm = ({ user }) => {
  console.log("Default image path:", DefaulPp);
  console.log("User profile_pic:", user?.profile_pic_url);
  // const mediaBaseUrl = "https://api.petbondbd.com"; // replace with your backend
  // const imageUrl = user?.profile_pic_url ? user.profile_pic_url : DefaulPp;
  console.log("User profile_pic_url:", user?.profile_pic_url);
  console.log("Current profile_pic:", user?.profile_pic_url);

  return (
    <main className="flex-1 p-8">
      <div className="bg-gray-700 shadow-md rounded-lg px-12 py-6">
        {/* Profile Image */}
        <div className="flex items-center justify-center mb-6">
          {/* <img
            src={user?.profile_pics ? user.profile_pics : DefaulPp} // singular profile_pic
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover mr-6"
          /> */}
          {/* <img
            src={imageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaulPp;
            }}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover mr-6"
          /> */}
          <img
            src={user.profile_pic_url || DefaulPp}
            // src={user?.profile_pic_url || DefaulPp}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover mr-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaulPp;
            }}
          />

        </div>

        {/* Name */}
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-white">
            {user?.first_name || 'No Name'} {user?.last_name || 'No Name'}
          </h2>
        </div>

        {/* Personal Info Section */}
        <div>
          <h3 className="text-lg text-center font-semibold text-gray-200 mb-2 px-2 mt-5">
            Personal Information
          </h3>

          {/* Email */}
          <div className="px-2 py-3">
            <p className="text-black">
              <span className="font-medium text-lg text-gray-900">Email</span>
            </p>
            <div className="p-3 bg-gray-100 rounded-md text-gray-800 w-full">
              <p>{user?.email}</p>
            </div>
          </div>

          {/* Address */}
          <div className="px-2 py-3">
            <p className="text-black">
              <span className="font-medium text-lg text-gray-900">Address</span>
            </p>
            <div className="p-3 bg-gray-100 rounded-md text-gray-800 w-full">
              <p>{user?.address || 'N/A'}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="px-2 py-3">
            <p className="text-black">
              <span className="font-medium text-lg text-gray-900">Phone Number</span>
            </p>
            <div className="p-3 bg-gray-100 rounded-md text-gray-800 w-full">
              <p>{user?.phone_number || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="text-center mt-4">
        <Link to="/dashboard/update-profile">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Edit Profile
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ProfileForm;
