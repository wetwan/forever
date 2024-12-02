// import React from 'react'

const NewsLetter = () => {
  const submitForm = async function (e) {
    e.preventDefault();
  };
  return (
    <section className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        {" "}
        Subscribe now & get 20% off{" "}
      </p>
      <p className="mt-3 text-gray-400">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ex?
      </p>
      <form className=" w-full sm:w-1/2 flex mx-auto border items-center my-6 gap-3 pl-3" onSubmit={submitForm}>
        <input type="email" placeholder="enter your email" className="w-full sm:flex-1 outline-none placeholder-shown:capitalize" required />
        <button type="submit" className="bg-black text-white text-sm px-10 py-4"> SUBSCRIBE</button>
      </form>
    </section>
  );
};

export default NewsLetter;
