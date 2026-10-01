import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SortByDropdown = ({callback = null}) => {
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([
    "Sort Newest",
    "Sort by Oldest",
    "Sort by Name",
  ]);
  useEffect(()=>{
    callback(selectedSortBy)
  }, [selectedSortBy])
  return (
    <div className="p-2 lg:p-10 font-[poppins]">
      <div className="dropdown inline-block relative">
        <button
          style={{
            border: "1px solid #00A5E2",
          }}
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className="bg-white text-[#23146D] min-w-[100px] font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <AiOutlineMenu /> &nbsp; &nbsp;
          <span className="mr-1">
            {selectedSortBy == "" ? "Sort By" : selectedSortBy}
          </span>
        </button>
        {showDropdown && (
          <ul className="dropdown-menu absolute  text-gray-700 pt-1">
            {categories.map((SortBy, i) => (
              <li key={i} className="">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    setSelectedSortBy(SortBy);
                  }}
                  className="rounded-t bg-white shadow hover:bg-gray-400 text-left py-2 px-5 min-w-[200px] block whitespace-no-wrap"
                >
                  {SortBy}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortByDropdown;