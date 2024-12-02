import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-12 justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" capitalize font-semibold "> easy exchange policy</p>
        <p className=" text-gray-400">We offer hassle free excahnge policy</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" capitalize font-semibold "> 7 days return policy</p>
        <p className=" text-gray-400">We provide 7 days return policy</p>
      </div>
      <div className="">
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className=" capitalize font-semibold ">best customer support </p>
        <p className=" text-gray-400">We provide 24/7 hour customer service</p>
      </div>
    </div>
  );
};

export default OurPolicy;
