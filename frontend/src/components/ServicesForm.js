// src/components/Form.js
import React, { useState } from "react";
import Images from "../constants/Images";
import { httpPostWithoutToken } from "../utils/http_util";

function ServiceForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      let response = await httpPostWithoutToken ("hygiene-form", formData);
      console.log(response.data); // Handle response as needed
      // Optionally, reset the form after submission
      setFormData({
        firstname: "",
        lastname: "",
        email:  "",
        phone: "",
        location: "",
        message: ""

      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }  

  };

  return (
    <section className="lg:flex lg:max-w-[1150px] md:max-w-[700px] lg:h-[750px] md:h-[850px] top-[4rem] rounded-lg lg:px-8 px-2 bg-[#F8FBFC]">
      <div className="relative top-[1rem] rounded-lg lg:mx-[4rem] mx-[2rem]">
        <h2 className="font-poppins lg:text-3xl md:text-2xl text-xl text-[#23146D] font-semibold leading-[122.222%] tracking-tighter">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-2 mt-4">
          <div className="lg:flex flex-col sm:flex-row gap-8 lg:space-y-0 space-y-[2rem]">
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="none"
                placeholder="first name"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="mt-1  rounded-[8px] lg:w-[200px] md:w-[570px] w-[250px] lg:h-[50px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]"
              >
               Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="none"
                placeholder="last name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="mt-1 rounded-[8px] block lg:w-[200px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] lg:text-[16px] text-[12px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>
          <div>
              <label
                htmlFor="lastname"
                className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]"
              >
               Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="none"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] lg:text-[16px] text-[12px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
            >
              Phone Number
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
              className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g Lekki, Lagos"
              autoComplete="none"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
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
              className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px] h-[200px]  w-[250px] lg:h-[128px]  border border-solid border-gray-300 bg-white p-4 shadow-sm font-sans focus:ring focus:ring-blue-200 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="group relative lg:w-[430px] lg:h-[48px] w-[180px] h-[48px] mt-[1rem] text-white text-center font-Poppins text-base font-semibold leading-normal flex justify-center py-3 px-4 border border-transparent  rounded-md bg-[#23146D] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <img  className="h-[80%] mt-8 lg:block hidden " src={Images.Get_IMG} />
    </section>
  );
}

export default ServiceForm;
