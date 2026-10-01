import { Link, useParams } from "react-router-dom"
import { AppContext } from "../../../state/context"
import { useContext, useEffect, useState } from "react"
import { httpGetWithoutToken, httpPostWithoutToken } from "../../../utils/http_util"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa6";

export default function CheckoutPage() {
    const { cart, updateCart, updateCartQty, newCart } = useContext(AppContext)
    const [items, setItems] = useState([])
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [telephone, setTelephone] = useState("")
    const [deliveryType, setDeliveryType] = useState("in-shop")
    const [deliverydate, setDeliveryDate] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    const [isLoading, setLoading] = useState(false)

    const params = useParams()
    useEffect(() => {
        if (params.product) {
            fetchConstants()
        } else {
            setItems(cart)
        }
    }, [])
    const fetchConstants = async () => {
        const resp = await httpGetWithoutToken("shop/product/" + params.product)
        if (resp.statusCode == 200) {
            if (resp.data.length == 0) {
                setItems([])
                setError("Invalid product, No product found")
            } else {
                setItems(resp.data)
            }
        }
    }
    const updateDeliveryType = (type) => {
        if(type == "in-shop") setDeliveryAddress("")
        setDeliveryType(type)
    }
    const deleteCart = (slug) => {
        const it = items.filter((l)=> l.slug !== slug)
        // console.log(it)
        newCart(it)
        setItems(it)
    }
    const updateCartQtyH = (slug, type, qty) => {
      
        var cartItems = items;
        const it = items.find((l)=> l.slug == slug)
        if(it){
            if(params.product){
            }else{
                updateCartQty(slug, type)
            }
            var newitems = []
            var q = qty == 1 && type.trim() == "minus" ? 1 : (type.trim() == "mninus" ? qty - 1 : qty + 1 )
            alert(q)
            alert(type)
            it.qty = q;
            for (let i = 0; i < cartItems.length; i++) {
                let item = cartItems[i];
                if(item.slug == slug) item = it;
                newitems = [...newitems, item];
            }
            setItems(newitems)
            toast.success("Cart updated")
        }
    }

    const placeOrder = async () => {
        if(isLoading) return false;
        if(fullname == "" || email == "" || telephone == "" || deliverydate == "" ){
            return toast.error("All fields are required!")
        }

        if( deliveryType == "delivery"){
            if(deliveryAddress == ""){
            return toast.error("Please enter your preferred delivery address!")
            }
        }
        setLoading(true)
        var data = {
            fullname : fullname,
            email : email,
            telephone : telephone,
            deliveryType : deliveryType,
            deliveryAddress : deliveryAddress,
            deliverydate : deliverydate,
            items : items
        }

        const resp = await httpPostWithoutToken("shop/checkout", data)
        setLoading(false)
       if(resp.statusCode !=200){
            return toast.error(resp.error)
       }
       newCart([])
       setItems([])
       toast.success("Checkout complete, the details of the Order has been sent to you email address")
    }
    return (
        <>
        <ToastContainer />
            <div class="px-4 pt-[50px] mx-auto max-w-[820px] text-center">
                <p class="text-xl font-medium">Request for a Quote</p>
                <p class="text-gray-600">PLEASE NOTE: We only use this quote to take record of your order. We will further communicate with you on the different specifications of your items before proceeding with deliveries.
                    Kindly note that shipping/delivery charges will be handled by client. This will also be determined by client's location and will be included in the invoice that will be sent.</p>
            </div>
            <div class="grid font-gentium-book-basic my-[50px] sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4 pt-0">
                <ToastContainer />
                    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 pb-4 sm:px-6">
                        {
                            items.map((item, i) => (
                                <div>

                                    <div key={i} class="flex flex-col rounded-lg bg-white sm:flex-row">
                                        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
                                        <div class="flex w-full flex-col px-4 py-4">
                                            <span class="font-semibold mb-3">{item.name}</span>
                                            <div className="w-28">
                                                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                    <button
                                                    onClick={()=>updateCartQtyH(item.slug, "minus", item.qty || 1)}
                                                        className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                        <span className="m-auto text-2xl font-thin">-</span>
                                                    </button>
                                                    <input type="text" disabled
                                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                        placeholder="1" value={item.qty ? item.qty : 1} />
                                                    <button
                                                    onClick={()=>updateCartQtyH(item.slug, "plus", item.qty || 1)}
                                                        className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                        <span className="m-auto text-2xl font-thin">+</span>
                                                    </button>
                                                    <div className="mx-1"></div>
                                                    <button
                                                    onClick={()=>deleteCart(item.slug)}
                                                        className="w-20 rounded-l outline-none cursor-pointer ">
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        {
                            items.length === 0 && <div className="mt-4">
                                <h3>Cart items</h3>
                                <p class="text-gray-600">No items found or all items was processed successfully</p>
                                <div className="mt-2"></div>
                                <Link className="bg-black px-3 py-2 rounded-[10px] text-white" to={'/hygiene-shop'}>Visit Shop</Link>
                            </div>
                        }
                    </div>

                </div>
                <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Payment Details</p>
                    <p class="text-gray-400">Complete your order by providing your payment details.</p>
                    <div class="">
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div class="relative mb-3">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com"  />
                        </div>

                        <label for="name" class="mt-4 mb-2 block text-sm font-medium">Fullname</label>
                        <div class="relative mb-3">
                            <input type="text" id="name" name="name" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Eg. Sam Shawn"
                            value={fullname} onChange={(e)=>setFullname(e.target.value)}
                             />
                        </div>


                        <label for="phone" class="mt-4 mb-2 block text-sm font-medium">Telephone</label>
                        <div class="relative mb-3">
                            <input type="text" id="phone" name="telephone" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="081XXXXXXXXX"
                            value={telephone} onChange={(e)=>setTelephone(e.target.value)} />
                        </div>

                        <label for="" class="mt-4 mb-2 block text-sm font-medium">Delivery Type</label>
                        <div class="relative flex gap-4 mb-3">
                            <label htmlFor="inShop" class="flex items-center gap-3 w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <input onChange={(e)=>{updateDeliveryType("in-shop")}} checked={deliveryType == "in-shop" ? true : false} type="radio" name="deliveryType" id="inShop" value={"in-shop"} /> In-shop Pickup
                            </label>

                            <label htmlFor="homeDelivery" class="flex items-center gap-3  w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <input  onChange={(e)=>{updateDeliveryType("delivery")}} type="radio" name="deliveryType" id="homeDelivery" value={"delivery"}
                                checked={deliveryType == "delivery" ? true : false} /> Home Delivery
                            </label>
                        </div>

                        <label for="deliverydate" class="mt-4 mb-2 block text-sm font-medium">Preferred Delivery Date</label>
                        <div class="relative mb-3">
                            <input type="date" id="deliverydate" name="deliverydate" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder=""
                            value={deliverydate} onChange={(e)=>setDeliveryDate(e.target.value)} />
                        </div>
                        {
                            deliveryType == "delivery" && 
                            <>
                            
                        <label for="delivery" class="mt-4 mb-2 block text-sm font-medium">Delivery Address</label>
                        <div class="relative mb-3">
                            <input type="text" id="delivery" name="deliveryAddress" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder=""
                            value={deliveryAddress} onChange={(e)=>setDeliveryAddress(e.target.value)} />
                        </div>
                        </>
                        }

                     

                        {/* <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900">$399.00</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <p class="font-semibold text-gray-900">$8.00</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Total</p>
                            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div> */}
                    </div>
                    <button onClick={placeOrder} disabled={isLoading ? true : false} class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">{isLoading ? "Processing" : "Place Order"}</button>
                </div>
            </div>
        </>
    )
}