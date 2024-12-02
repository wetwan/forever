import { useContext } from "react";
import { ShopContex } from "../context/ShopContex";
import Title from "./Title";

const CartTotal = () => {
  const { getCartAmount, currency } = useContext(ShopContex);
  const delivery_fee = (20 / getCartAmount()) * 100;

  return (
    <section className="w-full">
      <div className="text-2xl">
        <Title text1={"cart"} text2={"totals"} />
      </div>
      <div
        className="flex flex-col gap-2 mt-2
       text-sm"
      >
        <div className="flex justify-between items-center">
          <p className=""> Subtotal</p>
          <p className="">
            {" "}
            {currency}
            {getCartAmount()}:00
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p className=""> Shipping</p>
          <p className="">
            {" "}
            {currency}
            {delivery_fee}:00
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <b className=""> Total</b>
          <p className="">
            {" "}
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}:00
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default CartTotal;
