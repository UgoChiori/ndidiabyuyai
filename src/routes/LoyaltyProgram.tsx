import React from "react";
import { FaStar, FaGift, FaPercent, FaUserPlus } from "react-icons/fa";

const LoyaltyProgram: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Loyalty Program
          </h1>
          <p className="text-lg text-gray-600">
            Join our loyalty program and enjoy exclusive rewards and benefits!
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: <FaStar className="text-4xl text-yellow-500" />,
              title: "Earn Points",
              description:
                "Earn points for every purchase and redeem them for discounts and free meals.",
            },
            {
              icon: <FaGift className="text-4xl text-yellow-500" />,
              title: "Exclusive Rewards",
              description:
                "Get access to exclusive rewards, special offers, and early access to new menu items.",
            },
            {
              icon: <FaPercent className="text-4xl text-yellow-500" />,
              title: "Discounts",
              description:
                "Enjoy member-only discounts and promotions throughout the year.",
            },
            {
              icon: <FaUserPlus className="text-4xl text-yellow-500" />,
              title: "Refer Friends",
              description:
                "Refer friends and earn bonus points when they join the program.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

      
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-gray-800">1.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sign Up</h3>
                <p className="text-gray-600">
                  Create an account and join our loyalty program for free.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-gray-800">2.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Earn Points
                </h3>
                <p className="text-gray-600">
                  Earn points for every purchase. The more you spend, the more
                  you earn!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-gray-800">3.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Redeem Rewards
                </h3>
                <p className="text-gray-600">
                  Use your points to redeem discounts, free meals, and exclusive
                  rewards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sign up today and start earning rewards with every purchase.
          </p>
          <a
            href="/signin"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
