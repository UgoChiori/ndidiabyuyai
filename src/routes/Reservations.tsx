import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUser, FaCheckCircle } from "react-icons/fa";

const Reservations = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: 1,
    seatingPreference: "indoor",
    specialRequests: "",
    dietaryRestrictions: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  // Refs for input fields
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const timeInputRef = React.useRef<HTMLInputElement>(null);
  const partySizeInputRef = React.useRef<HTMLSelectElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Reserve Your Seat</h1>
          <p className="text-lg text-gray-600">
            Book a table and enjoy an unforgettable dining experience.
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer"
                  required
                  ref={dateInputRef}
                />
                <FaCalendarAlt
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => dateInputRef.current?.focus()}
                />
              </div>
            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer"
                  required
                  ref={timeInputRef}
                />
                <FaClock
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => timeInputRef.current?.focus()}
                />
              </div>
            </div>
          </div>

          {/* Party Size */}
          <div className="mt-6">
            <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 mb-1">
              Party Size
            </label>
            <div className="relative">
              <select
                id="partySize"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
                ref={partySizeInputRef}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
              <FaUser
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => partySizeInputRef.current?.focus()}
              />
            </div>
          </div>

          {/* Seating Preference */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seating Preference
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="seatingPreference"
                  value="indoor"
                  checked={formData.seatingPreference === "indoor"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-yellow-500"
                />
                <span className="ml-3 text-gray-700">Indoor</span>
              </label>
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="seatingPreference"
                  value="outdoor"
                  checked={formData.seatingPreference === "outdoor"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-yellow-500"
                />
                <span className="ml-3 text-gray-700">Outdoor</span>
              </label>
            </div>
          </div>

          {/* Special Requests & Dietary Restrictions */}
          <div className="mt-6">
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              rows={3}
              placeholder="Any special requests?"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Any dietary restrictions?"
            />
          </div>

          {/* Contact Information */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 cursor-pointer"
            >
              Confirm Reservation
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h2>
              <p className="text-gray-600">We look forward to seeing you.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;