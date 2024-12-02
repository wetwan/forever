/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { ShopContex } from "../context/ShopContex";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContex);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevente");

  const tooglCatrgory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const tooglSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fpcopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setFilterProduct(fpcopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpcopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <section className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter options  */}
      <div className=" min-w-60">
        <p
          className=" my-2 text-xl flex items-center cursor-pointer gap-2 "
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS{" "}
          <img
            src={assets.dropdown_icon}
            className={` h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* category filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className=" uppercase text-sm mb-3 font-medium "> categories</p>
          <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className=" flex gap-2 items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={tooglCatrgory}
                className="w-3"
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className=" flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={tooglCatrgory}
                className="w-3"
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className=" flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={tooglCatrgory}
                className="w-3"
                value={"Kids"}
              />
              Children
            </p>
          </div>
        </div>
        {/* sub-category filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className=" uppercase text-sm mb-3 font-medium "> type</p>
          <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className=" flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={tooglSubCategory}
                className="w-3"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className=" flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={tooglSubCategory}
                className="w-3"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className=" flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={tooglSubCategory}
                className="w-3"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* product categories */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all"} text2={"Collection"} />
          {/* sort option  */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relevent">Relevent</option>
            <option value="low-high"> Low - High</option>
            <option value="high-low">High - Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, i) => (
            <ProductItem
              key={i}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
