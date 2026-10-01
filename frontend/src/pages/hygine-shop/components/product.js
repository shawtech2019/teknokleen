import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../../state/context"
import { alpha, httpGetWithoutToken } from "../../../utils/http_util";

export const ProductView = ({product, addToCart, inCart, close}) => {
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const [daProduct, setDaProduct] = useState({})
    const [productLoading, setProductLoading] = useState(true)
    const {cart, updateCartQty} = useContext(AppContext)
    useEffect(()=> {
        var prod = cart.find((c)=> c.slug == product.slug)
        if(prod) setQty(prod.qty || 1)
        fetchProduct(product)
    }, [product])

    const fetchProduct =async () => {
        const p = await httpGetWithoutToken("shop/product/"+product.slug)
        setDaProduct(p.data[0])
        setProductLoading(false)
    }
    const updateQty = (type) => {
        if(type == "minus"){
            const r = qty == 1 ? 1 : qty-1;
            setQty(r)
        }else{
            setQty(qty + 1)
        }
        const slug = product.slug;
        updateCartQty(slug, type)
    }
    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-[2323232323]">
            <div className="h-full w-full bg-[#00000080]" onClick={()=> close()}></div>
            <div className="w-full top-[10vh] absolute h-[80vh]">
                <div className="relative flex justify-center items-center h-full w-full">
                    <div className="container mx-auto relative">
                        <div className="bg-white mx-auto max-w-[1000px] p-[20px]  overflow-auto shadow h-[80vh]">
                            {
                                productLoading 
                                ? 
                                <p>Loading product...</p>
                                :
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4 md:w-1/2 ">
                                    <div className="sticky top-0 z-50 overflow-hidden ">
                                        <div className="relative mb-6 lg:mb-10" style={{ height: "450px" }}>
                                            <img src={product.image}
                                                alt="" className="object-contain w-full h-full " />
                                        </div>
                                        <div className="flex-wrap hidden  ">
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" className="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" className="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" className="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" className="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 ">
                                    <div className="lg:pl-20">
                                        <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                            <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                               {product.name}
                                            </h2>
                                            <div className="flex flex-wrap items-center mb-6">
                                                <ul className="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                                    href="#">
                                                    {product.name}
                                                </a>
                                            </div>
                                            <p className="max-w-md short_description mb-8 text-gray-700 dark:text-gray-400">
                                               <div
                                               dangerouslySetInnerHTML={{__html: daProduct?.short_description}}></div>
                                            </p>
                                          

                                        </div>
                                       
                                       
                                        <div className="flex flex-wrap items-center ">
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <div className="w-28">
                                                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                        <button
                                                        onClick={()=>updateQty("minus")}
                                                            className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                            <span className="m-auto text-2xl font-thin">-</span>
                                                        </button>
                                                        <input type="number"
                                                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                            placeholder="1" value={qty} onChange={(e)=>setQty(e.target.value)} />
                                                        <button
                                                        onClick={()=>updateQty("plus")}
                                                            className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                            <span className="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <button
                                                onClick={()=>{
                                                    navigate("/hygiene-shop/checkout/"+product.slug)
                                                }}
                                                    className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                                    Buy Now</button>
                                            </div>
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <button onClick={()=>{
                                                    if(!inCart) addToCart(product, qty)
                                                }}
                                                    className={`flex items-center justify-center w-full h-10 p-2 ${!inCart && "text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-gray-500 dark:hover:border-blue-500 dark:hover:text-gray-300"} ${inCart && "bg-gray-200"}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${inCart ? "curentColor" : "#ffffff"}`}
                                                        className="bi bi-cart" viewBox="0 0 16 16">
                                                        <path
                                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            </div>
                    </div>
                </div>
            </div>
        </div>


    )
}