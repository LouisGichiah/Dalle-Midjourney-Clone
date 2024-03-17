import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signuppage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  const { email, firstName, lastName, password, confirmPassword } = formData;

  const isFormValid = email !== '' && firstName !== '' && lastName !== '' && password !== '' && password === confirmPassword;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md" />
        <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" className="px-4 py-2 border border-gray-300 rounded-md" />
        <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" className="px-4 py-2 border border-gray-300 rounded-md" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className="px-4 py-2 border border-gray-300 rounded-md" />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="px-4 py-2 border border-gray-300 rounded-md" />
        <button type="submit" disabled={!isFormValid} className={`bg-green-500 text-white px-4 py-2 rounded-md ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}>
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default Signuppage;
