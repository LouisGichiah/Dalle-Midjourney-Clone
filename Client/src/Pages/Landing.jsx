import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Landing;
