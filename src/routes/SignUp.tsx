import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

type SignUpFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data); // Handle sign-up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <p className="text-gray-600">Create an account to get started.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-gray-200 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-yellow-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;