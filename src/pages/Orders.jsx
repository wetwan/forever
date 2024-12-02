import { useContext } from "react";
import { ShopContex } from "../context/ShopContex";
import Title from "../components/Title";

const Orders = () => {
  const { currency, products } = useContext(ShopContex);
  return (
    <section className=" border-t pt-16">
      <div className="text-2xl">
        <Title text1={"my"} text2={"orders"} />
      </div>
      <div className="">
        {products.slice(3, 7).map((item, i) => (
          <div
            className="py-4 border-t border-b flex md:items-center md:justify-between flex-col md:flex-row  text-gray-700"
            key={i}
          >
            <div className="flex items-start gap-6 text-sm capitalize">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div className="">
                <div className="">
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg ">
                      {currency}
                      {item.price}
                    </p>
                    <p className=" ">quantity: 1</p>
                    <p> size : m</p>
                  </div>
                </div>
                <p>
                  {" "}
                  date : <span className="text-gray-400 "> 02-12-2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between capitalize">
              <div className=" flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-700"> </p>
                <p className=" text-sm sm:text-base"> ready to ship</p>
              </div>
              <button className="capitalize border px-4 py-2 text-sm rounded-sm font-medium ">
                {" "}
                track order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
