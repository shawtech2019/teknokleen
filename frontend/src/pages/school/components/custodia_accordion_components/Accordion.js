import React, { useState } from 'react';

const Accordion = ({ title, content, table }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => { 
    setIsOpen(isOpen ? null : index);
  };

  return (
    <div className="p-2 mb-4">
      <div className="flex gap-4 items-center">
      <button
          className="text-[#23146D]  border-[1px] h-[24px] w-[24px] border-[#23146D] rounded-[50px]"
          onClick={toggleAccordion}
        >
          {isOpen ? '-' : '+'}
        </button>
        <h2 className="text-[20px] text-[#222223] font-bold">{title}</h2>
      </div>
      {isOpen && <div className="mt-2 text-[#000] leading-[30px] px-10 ">{content}
      {table }
      </div>}
    </div>
  );
};

export default Accordion;