
import { Link, NavLink, useNavigate } from "react-router";
import { assets, nav } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContex } from "../context/ShopContex";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const naviagte = useNavigate();
  const { setShowSearch,getCartCount } = useContext(ShopContex);

  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <img
        src={assets.logo}
        className="w-36"
        alt="logo"
        onClick={() => {
          scrollTo(0, 0);
          naviagte("/");
        }}
      />
      <ul className="hidden sm:flex gap-5 text-sm to-gray-700 ">
        {nav.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            className="flex flex-col items-center gap-1 capitalize"
            onClick={() => {
              scrollTo(0, 0);
            }}
          >
            <p>{item.label}</p>
            <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        ))}
      </ul>
      <div className=" flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
          onClick={()=> setShowSearch(true)}
        />
        <div className=" group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={()=> naviagte('/login')}
          />
          <div className=" absolute hidden group-hover:block dropdown-menu right-0 pt-4">
            <div className=" flex capitalize flex-col gap-2 w-36 bg-slate-100 py-3 px-5 text-sm text-gray-500">
              <p className="cursor-pointer hover:text-black"> my profile</p>
              <p className="cursor-pointer hover:text-black" onClick={()=>naviagte('/orders')}> orders</p>
              <p className="cursor-pointer hover:text-black"> log out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className=" absolute w-4 text-center right-[-5px] bottom-[-5px] leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
           {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="cursor-default w-5 sm:hidden "
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>
      {/* sdiebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex item-center gap-4 p-3"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              className="transition-all  h-4 rotate-180"
              alt=""
            />
            <p>Back</p>
          </div>

          {nav.map((item, i) => (
            <NavLink
              key={i}
              className=" py-2 pl-6 border capitalize"
              to={item.link}
              onClick={() => {
                setVisible(false);
                scrollTo(0, 0);
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
