/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";

import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContex } from "../context/ShopContex";

const LeastCollection = () => {
  const { products } = useContext(ShopContex);
  const [leastProduct, setLeastProduct] = useState([]);
  useEffect(() => {
    setLeastProduct(products.slice(0, 10));
  }, []);

  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          asperiores?
        </p>
      </div>
      {/* rending products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {leastProduct.map((item, i) => (
          <ProductItem
            key={i}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LeastCollection;
