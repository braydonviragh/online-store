import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import checkoutBanner from "./images/hikingBanner.JPG";
function Checkout() {
    const [{ basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__top">
                <div className="checkout__left">
                    <img className="checkout__ad"
                    src={checkoutBanner}
                    alt="checkout image"/>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                   
                </div>
            </div>
            
            <div>
                <h3>Hello {user?.email}</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map(item =>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                    />
                ))}
               
            </div>
        </div>
        
    )
}

export default Checkout

