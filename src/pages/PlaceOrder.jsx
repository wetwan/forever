


import { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { ShopContex } from "../context/ShopContex";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContex);
  const [method, setMethod]=useState('cod')
  return (
    <section className="flex felx col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side  */}
      <div className="flex flex-col ha4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'delivery'} text2={'information'} />
        </div>
        <div className="flex gap-3 items-center my-2">
          <input type="text" placeholder="first name"  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
          <input type="text" placeholder="last name"  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
        </div>
        <input type="email" placeholder="e-mail address"  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
        <input type="text" placeholder="street"  className="border my-2 placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
        <div className="flex gap-3 items-center my-2">
          <input type="text" placeholder="city "  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
          <input type="text" placeholder="state "  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
        </div> 
        <div className="flex gap-3 items-center my-2">
          <input type="number" placeholder="zip-code "  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
          <input type="text" placeholder="country "  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
        </div> 
        <input type="number" placeholder="phone "  className="border placeholder-shown:capitalize outline-none py-1.5 px-3.5 w-full border-e-gray-300 "/>
      </div>

      {/* right side */}
      <div className="mt-9">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'payment'} text2={'method'} />
          {/* payemtn method  */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'? 'bg-green-400' : ''} `}></p>
                <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay'? 'bg-green-400' : ''} `}></p>
                <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? 'bg-green-400' : ''} `}></p>
             <p className=" text-gray-500 text-sm font-medium mt-1 "> CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=> navigate('/orders')} className=" uppercase bg-black text-white px-16 py-3 text-sm" > place order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
