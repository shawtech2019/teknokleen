import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { usePaystackPayment, PaystackButton } from 'react-paystack';
import { httpPostWithoutToken } from '../../../utils/http_util';



const RegistrationForm = ({ isOpen, onClose, title, amt }) => {


  const states = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  ];



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState(amt)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedState, setSelectedState] = useState('');
  const [hearaboutus, setHearAboutUs] = useState('')
  const [showpaystack, setShowPaystack] = useState(false)

const publicKey = "pk_test_8f31522a6130568a751f67e690000ec9d9b8738a"
const componentProps = {
  email : email,
  amount : amount*100,
  metadata: {
    name,
    phoneNumber,
  },
  publicKey,
  text: "Pay Now",
  onclick : ()=> {
    alert("click");
  },
  BeforeUnloadEvent : ()=> {
    alert("before")
  },
  onSuccess:  (resp) =>{
    paymentDone(resp)
      alert("Thanks for doing business with us! Come back soon!!")
  },
  onClose: () => alert("Wait! Don't leave :("),
}

const paymentDone = async (resp) => {
  var ref = resp.reference;
  var data = {
    title : title,
    amount : amount,
    ref : ref,
    name : name,
    email : email,
    phoneNumber : phoneNumber,
    state : selectedState,
    hearaboutus : hearaboutus
  }

  let res = await httpPostWithoutToken("courses-form", data);
  if(res == "success"){
    alert("Your Course payment was received, We will contact you shortly!")
  }else{
    alert("Something went wrong")
  }
}

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
  const handleChangeHear = (e) => {
    setHearAboutUs(e.target.value);
  };
  const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name == "" || email == "" || amount == "" || phoneNumber == "" || selectedState == ""){
      alert("All Fields are required");
      return false;
   }
   if(!validateEmail(email)){
    alert("invalid email address")
    return false;
   }

   setShowPaystack(true)
  };
  const hears = [
    "Google", "Facebook", "Instagram", "Twitter", "Website & Blog"
  ]
  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } fixed inset-0 w-full h-full z-50 overflow-auto bg-black bg-opacity-50 flex`}
    >
      <div className="relative px-3 pt-8 lg:w-[50%] md: h-[80%] overflow-auto bg-white rounded-lg m-auto">
        <button
          className="absolute top-0 right-0 p-2 m-3 text-[24px] text-[#23146D] hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold text-[#23146D] font-[''gentium-book-basic''] ">Register Here</h2>
        {
          showpaystack ?
          <>
          <div className='p-3'>
            <p>Please proceed to make payment for the course</p>

          <PaystackButton className='bg-blue-500 text-white py-2 px-4 mt-2 rounded-md hover:bg-blue-600' {...componentProps} />
          <span className='mx-3'></span> <a href="#?" onClick={()=> setShowPaystack(false)}>cancel</a>
          </div>
          </>
          :
        <form className="mt-4 p-2 pb-5 w-full" onSubmit={handleSubmit}>
          <div className='mb-4'>
            <strong>Course : {title}</strong>
          </div>
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Amount (NGN)
            </label>
            <input
              type="amount"
              id="amount"
              name="amount"
              placeholder='180,000'
              autoComplete='none'
              value={amount}
              onChange={handleAmount}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div> */}
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-700">
              Current Location
            </label>
            <select
              id="state"
              name="state"
              value={selectedState}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
            <select
              id="state"
              name="state"
              value={hearaboutus}
              onChange={handleChangeHear}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select</option>
              {hears.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
           
              <button className='bg-blue-500 text-white py-2 px-4 mt-2 rounded-md hover:bg-blue-600'>Submit</button>
            


        </form>
        }
      </div>
    </div>
  );
};

export default RegistrationForm;