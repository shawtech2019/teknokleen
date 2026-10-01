import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Images from '../constants/Images';
import axios from 'axios';
import { httpPostWithoutToken } from '../utils/http_util';

const ApplicationForm = ({ isOpen, onClose }) => {
  const [attachments, setAttachments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachments(file);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setAttachments(file);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const fileInputRef = React.createRef();

  const handleClickToUpload = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if(isLoading) return false;
    setIsLoading(true)
    e.preventDefault();

    try {
      // Validate file type (only allow PDF files for example)
      if (attachments && attachments.type === 'application/pdf') {
        const formDataWithFile = new FormData();
        formDataWithFile.append('file', attachments);
        formDataWithFile.append('firstname', formData.firstname);
        formDataWithFile.append('lastname', formData.lastname);
        formDataWithFile.append('email', formData.email);
        formDataWithFile.append('message', formData.message);
        let response = await httpPostWithoutToken ("application-form", formDataWithFile);
        console.log("reponse", response);
        if(response.status = "success") {
          alert(response.message)
        }else{
          alert(response.message)
        }
    setIsLoading(false)

        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
        setAttachments(null);
      } else {
        console.error('Invalid file type. Please upload a PDF file.');
      }
    } catch (error) {
    setIsLoading(false)

      console.error('Error submitting form ', error);
    }
    // onClose();
  };

  return (
    <div style={{zIndex : "991291293"}} className={`fixed inset-0 w-full h-full z-50  bg-black bg-opacity-50 flex ${isOpen ? 'block' : 'hidden'}`}>
      <div className="relative lg:pl-20 md:pl-10 pl-10 pt-8 overflow-auto w-[80%] h-[80%] bg-white rounded-lg m-auto flex gap-20">
        <button className="absolute top-0 right-0 p-2 m-3 text-[18px] w-[40px] h-[40px] rounded-[50px] bg-[#23146D] text-[#fff] hover:text-red-500 flex items-center justify-center" onClick={onClose}>
          <FaTimes />
        </button>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="lg:flex p-3 flex-col sm:flex-row gap-8 lg:space-y-0 space-y-[2rem]">
            <div>
              <label htmlFor="firstname" className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]">
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
              <label htmlFor="lastname" className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]">
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
            <label htmlFor="email" className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]">
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
            <label htmlFor="message" className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]">
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
          <div className="space-y-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
              Click to upload CV or drag and drop your CV here:
            </label>
            <div
              className="lg:w-[430px] lg:h-[128px] md:w-[570px] md:h-[200px] h-[128px] w-[250px] px-8 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
              onClick={handleClickToUpload}
              onDrop={handleFileDrop}
              onDragOver={preventDefault}
            >
              {attachments? (
                <p className="text-sm text-gray-600">Selected file: {attachments.name}</p>
              ) : (
                <p className="text-sm text-gray-600">Drag and drop your file here or click to select a file</p>
              )}
            </div>
            <input id="attachments" accept=".pdf" type="file" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
          </div>
          <button
            type="submit"
            className="bg-[#23146D] text-white lg:w-[430px] md:w-[570px] w-[250px] py-2 px-4 mt-6 rounded-md hover:bg-blue-600"
          >
            {isLoading ? 'Please wait...' : 'Submit'}
          </button>
          <br />
          <div className='my-3 opacity-0'>s</div>
        </form>
        <img src={Images.Applicate_IMG} className="mb-8 lg:block hidden" alt="Application" />
      </div>
    </div>
  );
};

export default ApplicationForm;
