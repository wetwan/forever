/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContex } from "../context/ShopContex";
import { Link } from "react-router";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContex);
  return (
    <Link
      to={`/product/${id}`}
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer "
    >
      <div className="overflow-hidden ">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-out "
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium ">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
