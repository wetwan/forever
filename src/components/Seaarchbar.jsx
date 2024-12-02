import { useContext, useEffect, useState } from "react";
import { ShopContex } from "../context/ShopContex";
import { assets } from "../assets/assets";
import { useLocation } from "react-router";

const Seaarchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContex);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("collection")
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <section className=" border border-t bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="search"
          className="flex-1 outline-none placeholder-shown:capitalize bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="search" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </section>
  ) : null;
};

export default Seaarchbar;
