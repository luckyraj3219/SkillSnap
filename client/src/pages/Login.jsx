import React from 'react';

function Login() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-gray-100 rounded-lg shadow-lg font-sans">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Login</h2>
      <form className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mb-6 p-3 rounded-md border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-blue-500 transition-colors"
        />

        <label htmlFor="password" className="mb-2 font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mb-8 p-3 rounded-md border border-gray-300 text-gray-900 text-base focus:outline-none focus:border-blue-500 transition-colors"
        />

        <button
          type="submit"
          className="py-4 bg-blue-600 text-white rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
