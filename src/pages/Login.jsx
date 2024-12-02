
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");
  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="outline-none  flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
      <div className=" inline-flex items-center ga2 mb2 mt-10">
        <p className="capitalize prata-regular text-3xl">{state}</p>
        <hr className=" border-none h-[1.5px] w-8 mx-1 bg-gray-800 " />
      </div>
      {state === "sign up" ? (
        <input
          type="text"
          required
          className="outline-none w-full px-3 py-2 border border-gray-800 placeholder-shown:capitalize"
          placeholder="name"
        />
      ) : (
        ""
      )}
      <input
        type="email"
        required
        className="outline-none w-full px-3 py-2 border border-gray-800 placeholder-shown:capitalize"
        placeholder="email"
      />
      <input
        type="password"
        required
        className="outline-none w-full px-3 py-2 border border-gray-800 placeholder-shown:capitalize"
        placeholder="password"
      />
      <div className="w-full flex justify-between font-semibold  capitalize transition-all ease-out duration-700  text-sm mt-[8px]">
        {state === "login" ? (
          <p className=" capitalize cursor-pointer"> forgot your password?</p>
        ) : (
          ""
        )}
        {state === "sign up" ? (
          <p onClick={() => setState("login")} className="cursor-pointer">
            {" "}
            login here
          </p>
        ) : (
          <p onClick={() => setState("sign up")} className="cursor-pointer">
            {" "}
            create account
          </p>
        )}
      </div>
      <button className="active:bg-gray-300 transition-all duration-300 ease-linear active:text-black capitalize text-white bg-black px-8 py-3 mt-4">
        {state === "login" ? "sign in" : "sign up"}
      </button>
    </form>
  );
};

export default Login;
