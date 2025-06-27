import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import { FaStar } from "react-icons/fa";
import defaultUserImage from "../../src/assets/default.png"; // user default pic

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    authApiClient
      .get("/reviews/")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.error("Error fetching all reviews", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {reviews.length === 0 && (
        <p className="col-span-full text-center">No reviews found.</p>
      )}

      {reviews.map((review) => (
        <div
          key={review.id}
          className=" border border-base-200 bg-gray-950 text-white p-6 rounded-xl shadow-lg"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < review.ratings ? "text-yellow-400" : "text-gray-500"
                }
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-lg italic mb-6">"{review.comment}"</p>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={defaultUserImage}
              alt={review.user?.name || "User"}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{review.user?.name || "Anonymous"}</p>
              <p className="text-sm text-gray-400">Pet Lover</p> {/* Static Role */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
