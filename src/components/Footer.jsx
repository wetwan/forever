import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm pb-10">
        <div className="">
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            reiciendis voluptate hic earum ex harum qui minima dignissimos quis?
            At in, quas sint praesentium voluptas esse fugiat nobis dolor odit!
          </p>
        </div>
        <div className="">
          <p className=" text-xl font-medium mb-5 capitalize"> company</p>
          <ul className=" cursor-pointer flex flex-col gap-1 text-gray-600 capitalize">
            <li>Home</li>
            <li>about us </li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className=" text-xl font-medium mb-5 capitalize"> get in touch</p>
          <ul className="cursor-pointer flex flex-col gap-1 text-gray-600 capitalize whitespace-nowrap">
            <li>
              <b>phone:</b> +23490123456789
            </li>
            <li>
              <b>email:</b> contact@forever.com
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr />
        <p className=" capitalize py-5 text-sm text-center">
          copyright {new Date().getFullYear()} <b>forever </b> -All right
          reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
