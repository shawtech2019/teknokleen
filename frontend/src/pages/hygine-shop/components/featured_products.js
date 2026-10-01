import CategoryDropdown from "../atoms/category_dropdown";
import SortByDropdown from "../atoms/sortby_dropdown";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { washableBrush } from "../../../constants/hygiene_shop_images";
import { productList } from "../../../data/products";
import { useContext, useEffect, useState } from "react";
import { alpha, httpGetWithoutToken } from "../../../utils/http_util";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../../state/context";
import { ProductView } from "./product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FeaturedProduct() {
  const {cart, updateCart} = useContext(AppContext)
  const params = useParams();
  const [sortBy, setSortBy] = useState("Sort by Newest")
  const [products, setProducts] = useState([])
  const [brands, setBrands] = useState([])
  const [category, setCategory] = useState(params.category != "shop" ? params.category || "" : "")
  const [brand, setBrand] = useState("")
  const [search, setSearch] = useState("")
  const [product, setProduct] = useState(null)
  const [useSearch, setUseSearch] = useState("")
  const [loadingid, setLoadingid] = useState("")
  useEffect(()=> {
    // console.log("cart", cart)
    fetchConstants();
    fetchBrands()
  }, [category, brand, useSearch])
 
  const fetchConstants = async ()=> {
    // alert(category )
    const resp = await httpGetWithoutToken("shop/products?search="+useSearch+"&category="+category+"&brand="+brand+"&sortBy="+sortBy)
    if(resp.statusCode == 200){
      setProducts(resp.data.items)
    }
  }
  const fetchBrands = async ()=> {
    const resp = await httpGetWithoutToken("shop/brands")
    if(resp.statusCode == 200){
      setBrands(resp.data)
    }
  }

  const searchChange = (e)=> {
    var key = e.target.value;
    setSearch(key)
    if(key.length > 2) {
      setUseSearch(key)
    }else{
      setUseSearch("")
    }

  } 
  const inCart = (id)=> {
    const isExist = cart.find((c)=> c.id === id)
    return isExist ? true : false;
  }
  const addToCart = (item, qty = 1) => {
    item.qty = qty;
    if(inCart(item.id)){

      return;
    }

    setLoadingid(item.id)
    setTimeout(()=> {
      updateCart(item)
      toast.success(qty == 1 ? "Product added to Cart" : "Cart updated")
    }, 1000)
  }
  
  return (
    <div className="container font-['poppins'] px-3 lg:px-auto mx-auto">
    <ToastContainer />
      <div className={`${params.category ?"my-[50px]" : "my-[50px]" }`}>
       {product &&  <ProductView inCart={inCart(product?.id)} addToCart={(item, qty)=>addToCart(item, qty)} close={()=>setProduct(null)} product={product} />}
        <div className="flex gap-5 lg:items-center flex-col lg:flex-row">
          {
           !params.category || params.category == "shop" ? <div>
            <h3 className="text-[#23146D] text-[24px] font-[600] whitespace-no-wrap min-w-[250px] w-[fit-content]">
              Products
            </h3>
          </div>:""
          }
          <div className="flex-initial w-full flex flex-col md:items-center lg:items-center md:flex-row lg:flex-row gap-4">
            {/* dropdwon here category */}
            <div className="flex items-center flex-initial w-full">
              {/* { */}
                <div className="min-w-[200px] lg:min-w-[250px]">
                <CategoryDropdown />
              </div>
              <div
                style={{ border: "1px solid #86CFF2" }}
                className="px-3 max-w-[350px] rounded-[10px] w-full flex items-center"
              >
                <input
                  className="h-[45px]  font-[poppins] outline-none border-none w-full "
                  placeholder="Search products"
                  value={search}
                  onChange={(e)=> searchChange(e)}
                />
                <AiOutlineSearch size={"18px"} color="#B0BABF" />
              </div>
            </div>
            <div className="flex gap-3 lg:gap-1 whitespace-no-wrap min-w-[300px] justify-end items-center cursor-[pointer]">
              <SortByDropdown callback={(value)=> setSortBy(value)} /> &nbsp;
              {/* cart button */}
              <Link to={"/hygiene-shop/checkout"}>
              <div className="flex relative gap-2 items-center">
                <FaCartShopping color="#23146D" size={"20px"} />{" "}
                <span>Cart</span>
                <span className="absolute rounded-[100%] text-[14px] flex text-white d-flex justify-center items-center bg-[red] min-h-[20px] min-w-[20px] top-[-10px] left-[10px]">{cart.length}</span>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-[30px] flex justify-center ">
          <ul className="cursor-['pointer'] flex justify-center gap-3 text-[#23146D] text-[14px]">
            <li onClick={()=>setBrand("")} className={`${brand == "" ? "font-bold cursor-[pointer] text-[#23146D]" : "" } cursor-[pointer]`}>All</li>
            {
              brands.map((item)=> (
            <li key={item.slug} onClick={()=>setBrand(item.slug)} className={`${brand == item.slug ? "font-bold  text-[#23146D]" : "" } cursor-[pointer]`}>{item.name}</li>
              ))
            }
          </ul>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, i) => (
            <div
              key={i}
              className="product relative p-3 pb-0 pl-0 rounded shadow bg-white"
            >
              <FaHeart
                onClick={() => {
                  console.log("clicking");
                }}
                className={`absolute ${inCart(item.id)? "text-red-700" : "text-[#B0BABF]"} right-[10px] top-[15px]`}
              />
              <div
              onClick={()=>setProduct(item)}
               className="h-[300px] lg:h-[250px] pl-3 flex justify-center p-[20px] items-center">
                <img
                  className="h-[90%]  object-contain"
                  src={item.image}
                />
              </div>
              <div className="p-2 pl-4">
                <h6>
                  {item.name.substring(0, 20)} {item.name.length > 20 && "..."}{" "}
                </h6>
              </div>
              <button
              onClick={()=>addToCart(item)}
                style={{ borderTopRightRadius: "10px" }}
                href="#?"
                className={`${(loadingid == item.id || inCart(item.id)) && "opacity-[0.5]"} text-[12px] text-white w-full h-[40px] bg-[#23146D]`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;