/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContex } from "../context/ShopContex";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContex);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <section className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* productData */}
      <div className=" flex gap-12 flex-col sm:flex-row">
        {/* product image  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, i) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={i}
                className="w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer sm:w-full"
                alt="image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="image" className="w-full h-auto" />
          </div>
        </div>
        {/* prodcu details  */}
        <div className="flex-1">
          <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="min-w-3.55" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(112)</p>
          </div>{" "}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="pt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className=" capitalize">select size</p>
            <div className="flex gap-2 items-center">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className=" leading-loose bg-black text-white px-8 py-4 text-sm active:bg-gray-700 uppercase"
            onClick={() => addToCart(productData._id, size)}
          >
            {" "}
            add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original produc.</p>
            <p>Xah om delivery is avalible on this product.</p>
            <p> Easy return and exchnage policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and review  */}
      <div className=" mt-20">
        <div className="flex items-center">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">reviews (122) </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm">
          <p className="">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            recusandae labore facilis eius necessitatibus vero architecto dolore
            sunt, ea expedita quas ex porro possimus quaerat facere animi fugit,
            commodi ab?
          </p>

          <p className="">
            {" "}
            Lor. Ipsum recusandae labore facilis eius necessitatibus vero
            architecto dolore sunt, ea expedita quas ex porro possimus quaerat
            facere animi fugit, commodi ab?em, ipsum dolor sit amet consectetur
            adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Numquam non iusto accusamus quo incidunt tempore voluptatem
            ipsum rerum eveniet optio, est cupiditate repellendus ad. Sapiente
            sunt omnis iusto quam optio! Temporibus non laborum quidem culpa
            quia molestias eaque repudiandae necessitatibus incidunt
            perspiciatis consequuntur vitae dolore molestiae ipsam, cumque
            minima sit.
          </p>
        </div>
      </div>

      {/* related product */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />

      <div className=""></div>
    </section>
  ) : (
    <section className=" opacity-0"></section>
  );
};

export default Product;
