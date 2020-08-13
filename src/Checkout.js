import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
     <div className="checkout__left">
     <img
        className="checkout__ad"
        src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/4898164dDRMT3S.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Amazon Cart is empty</h2>
          <p>
            You have no items in your Amazon Cart.To buy one or more items,click
            "Add to cart"underneth of items.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title"> Your Shoping Basket</h2>

          {basket?.map((item) => {
           // console.log(item);
            return(
            <CheckoutProduct             
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          )})}
        </div> 
      )}
     </div>
       {basket.length >0 && (
          <div className="checkout__right">
            
             <Subtotal /> 
          </div>
       )}
    </div>
  );
}

export default Checkout;
