// src/components/Form.js
import React, { useState } from "react";
import axios from "axios"

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const response = await axios.post("https://tekno.onrender.com/api/contact-form", formData);
      console.log(response)

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.log("Error submitting form ", error)
    }
  };

  return (
    <section>
      <div className="lg:max-w-[960px] md:max-w-[700px] lg:h-[807px] md:h-[850px] relative top-[-10rem] rounded-lg bg-white shadow-lg mx-auto lg:p-[4rem] md:p-[4rem] p-[2rem] md:py-[4rem]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="lg:flex flex-col sm:flex-row gap-8 lg:space-y-0 space-y-[2rem]">
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="none"
                placeholder="Shaw Marcel"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1  rounded-[8px] lg:w-[401px] md:w-[570px] w-[340px] lg:h-[56px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]"
              >
                Contact email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="none"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 rounded-[8px] block lg:w-[401px] md:w-[570px] w-[340px] lg:h-[56px] md:h-[56px] h-[40px] lg:text-[16px] text-[12px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+"
              autoComplete="none"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 rounded-[8px] block lg:w-[832px] md:w-[570px] w-[340px] lg:h-[56px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message...."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              autoComplete="off"
              className="mt-1 rounded-[8px] block lg:w-[832px] md:w-[570px] h-[240px] w-[340px] lg:h-[240px]  border border-solid border-gray-300 bg-white p-4 shadow-sm font-sans focus:ring focus:ring-blue-200 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <p className="text-[#4F4F4F] font-['Poppins'] text-base font-normal leading-7">
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>
            <button
              type="submit"
              className="group relative w-[180px] h-[48px] mt-[1rem] text-white text-center font-Poppins text-base font-semibold leading-normal flex justify-center py-3 px-4 border border-transparent  rounded-md bg-[#23146D] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;