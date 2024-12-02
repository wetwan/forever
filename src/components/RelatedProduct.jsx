/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { ShopContex } from "../context/ShopContex";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContex);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let prodcutCopy = products.slice();
      prodcutCopy = prodcutCopy.filter((item) => category === item.category);
      prodcutCopy = prodcutCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(prodcutCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="my-24">
      <div className="text-center text-2xl py-2">
        <Title text1={"related"} text2={"products"} />
      </div>
      {/* redening product  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, i) => (
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

export default RelatedProduct;
