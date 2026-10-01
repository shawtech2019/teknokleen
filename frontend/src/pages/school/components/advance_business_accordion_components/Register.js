import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
const Register = ({ isOpen, onClose }) => {


  const states = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  ];
  


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedState, setSelectedState] = useState('');



const handleName = (e) => {
    setName(e.target.value)
}
const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handleAmount = (e) => {
    setAmount(e.target.value)
}
const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
}
const handleChange = (e) => {
  setSelectedState(e.target.value);
};


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here.
   setName("");
   setEmail("")
   setAmount("")
    // Close the modal
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 w-full h-full z-50 overflow-auto bg-black bg-opacity-50 flex`}
    >
      <div className="relative pl-20 pt-8 w-[50%] h-[80%] bg-white rounded-lg m-auto">
        <button
          className="absolute top-0 right-0 p-2 m-3 text-[24px] text-[#23146D] hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold text-[#23146D] font-[''gentium-book-basic''] ">Register Here</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='First name & last name'
              autoComplete='none'
              autoCapitalize='none'
              value={name}
              onChange={handleName}
              className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='example@info.com'
              autoComplete='none'
              autoCapitalize='none'
              value={email}
              onChange={handleEmail}
              className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Amount (NGN)
            </label>
            <input
              type="amount"
              id="amount"
              name="amount"
              placeholder='120,000'
              autoComplete='none'
              value={amount}
              onChange={handleAmount}
              className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
             Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='Enter your Phone number'
              autoComplete='none'
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="w-full max-w-xs">
          <label htmlFor="email" className="block text-gray-700">
             Current Location
            </label>
      <select
        id="state"
        name="state"
        value={selectedState}
        onChange={handleChange}
        className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
    <div className='mt-4'>
        <p>How did You Here About Us</p>
   <div className='flex gap-20'>
    <div>
    <input type="radio" id="html" name="fav_language" value="google" />
  <label for="html">Google</label><br/>
  <input type="radio" id="css" name="fav_language" value="facebook" />
  <label for="css">Facebook</label><br />
  <input type="radio" id="javascript" name="fav_language" value="instagram" />
  <label for="javascript">Instagram</label>
    </div>
    <div>
    <input type="radio" id="html" name="fav_language" value="twitter" />
  <label for="html">Twitter</label><br/>
  <input type="radio" id="css" name="fav_language" value="facebook" />
  <label for="css">Website & blog</label><br />
    </div>
   </div>
    </div>
          <button
            type="submit"
            className="bg-blue-500 flex items-end justify-end text-white py-2 px-4 mt-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
