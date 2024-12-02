import { useContext, useEffect, useState } from "react";
import { ShopContex } from "../context/ShopContex";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } =
    useContext(ShopContex);
  const [cartData, setCartdata] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartdata(tempData);
  }, [cartItems]);

  return (
    <section className="border-t pt-14">
      <div className="text-2xl mb-3 ">
        <Title text1={"your"} text2={"cart"} />
      </div>
      <div className="">
        {cartData.map((item, i) => {
          const productdata = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              className="py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={i}
            >
              <div className="flex items-start gap-6">
                <img
                  src={productdata.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div className="">
                  <p className="text-sm sm:text-lg font-medium ">
                    {productdata.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {productdata.price}
                    </p>
                    <p className=" px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10  px-1 sm:px-2 py-1 sm:max-w-20"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) => e.target.value === ''|| e.target.value === '0'? null : updateQuantity(item._id, item.size, Number(e.target.value))}
              />
              <img
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt=""
                onClick={() => updateQuantity(item._id, item.size, -1)}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={()=> navigate('/place-order')} className="bg-black text-white text-sm my-8 uppercase px-8 py-3"> proced to checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
