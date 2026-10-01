import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { httpGetWithoutToken } from "../../../utils/http_util";
import { useNavigate } from "react-router-dom";

const CategoryDropdown = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ]);
  useEffect(()=> {
    fetchConstants()
  }, [])
  const fetchConstants = async ()=> {
    const resp = await httpGetWithoutToken("shop/categories")
    if(resp.statusCode == 200){
      setCategories(resp.data)
    }
  }

  const dropCategoryName = ()=> {
    let category = categories.find(c=> c.slug === selectedCategory)
    return category.name
  }
  return (
    <div className="lg:p-10 font-[poppins]">
      <div className="dropdown inline-block relative">
        <button
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className="bg-[#23146D] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <AiOutlineMenu /> &nbsp;
          <span className="mr-1">
            {selectedCategory == "" ? "Category" : dropCategoryName(selectedCategory)}
          </span>
        </button>
        {showDropdown && (
          <ul className="dropdown-menu absolute z-[112112] text-gray-700 pt-1">
             <li className="">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    setSelectedCategory("");
                  }}
                  className="rounded-t bg-white shadow hover:bg-gray-400 text-left py-2 px-5 min-w-[200px] block whitespace-no-wrap"
                >
                 All
                </button>
              </li>
            {categories.map((category, i) => (
              <li key={i} className="">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    setSelectedCategory(category.slug);
                    navigate("/hygiene-shop/"+category.slug)
                  }}
                  className="rounded-t bg-white shadow hover:bg-gray-400 text-left py-2 px-5 min-w-[200px] block whitespace-no-wrap"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;