// MyContext.js
import { createContext, useState } from 'react';
import ls from "localstorage-slim"

export const AppContext = createContext();
export default function AppStateProvider(props){
    const [cart, setCart] = useState(ls.get("cartItems") ?? [])
    const updateCart = (newItem) => {
        var c = ls.get("cartItems") ?? [];
        c = [...c, newItem];
        ls.set("cartItems", c)
        setCart(c)
    }
    const newCart = (items) => {
        ls.set("cartItems", items)

        setCart(items)
    }
    const updateCartQty = (productSlug, type) => {
        var c = ls.get("cartItems") ?? [];
        var product = c.find((p)=> p.slug == productSlug)
        if(product){
            if(type == "minus"){
                product.qty = !product.qty || product.qty == 1 ? 1 : product.qty - 1
            }else{
                product.qty = !product.qty ? 1 : product.qty + 1
            }
        }

        var cartItems = []
        for (let i = 0; i < c.length; i++) {
            const item = c[i];
            if(item.slug == productSlug){
                cartItems = [...cartItems, product]
            }else{
                cartItems = [...cartItems, item]
            }
        }
        ls.set("cartItems", cartItems)
        console.log(cartItems)
        setCart(cartItems)
    }

    return (
        <AppContext.Provider
        value={{
            cart, updateCart,updateCartQty, newCart
        }}
         >
            {props.children}
        </AppContext.Provider>
    )
}

// export default {AppContext, useContextValues};