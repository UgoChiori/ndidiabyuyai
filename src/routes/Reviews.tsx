import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Adebayo T.",
      rating: 5,
      comment: "Best Jollof Rice I’ve ever had!",
      date: "2023-10-01",
    },
    {
      id: 2,
      name: "Chioma U.",
      rating: 4,
      comment: "Feels like home with every bite.",
      date: "2023-10-05",
    },
    {
      id: 3,
      name: "Ekanem T.",
      rating: 5,
      comment: "The best I have ever had.",
      date: "2023-10-10",
    },
    {
      id: 4,
      name: "Abdullahi Ahmed",
      rating: 4,
      comment: "I definitely recommend.",
      date: "2023-10-15",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.rating > 0 && newReview.comment) {
      const reviewToAdd = {
        id: reviews.length + 1,
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([...reviews, reviewToAdd]);
      setNewReview({ name: "", rating: 0, comment: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews</h1>
          <p className="text-lg text-gray-600">
            See what our customers are saying about us.
          </p>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave a Review</h2>
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Rating Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl ${
                      star <= newReview.rating ? "text-yellow-500" : "text-gray-300"
                    } hover:text-yellow-500 transition-all duration-300`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Input */}
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                rows={4}
                placeholder="Write your review here..."
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 cursor-pointer "
              >
                Submit Review
              </button>
            </div>
          </div>
        </form>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaUserCircle className="text-4xl text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`text-lg ${
                          star <= review.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-2">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <FaStar className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600">Your review has been submitted.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;