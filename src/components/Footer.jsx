import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="flex  justify-between px-12 py-12 bg-gradient-to-t from-red-500 from-2% to-black h-fit">
      <div className="left flex flex-col gap-4">
        <Link className="flex gap-0 items-center border-b-2 border-white py-4 w-100" to="/">
          <img src="../../public/Nav-Logo.png" width={50} height={50} alt="" />
          <h1 className="text-3xl font-bold text-white">FilmFabor</h1>
        </Link>
        <p className="text-white">Watch unlimited movies and TV Shows fro free</p>
        <div className="social-media flex gap-2">
            <img className="cursor-pointer" src="../../public/facebook.png" alt="" width={25} />
            <img className="cursor-pointer" src="../../public/instagram.png" alt="" width={25} />
            <img className="cursor-pointer" src="../../public/snapchat.png" alt="" width={25} />
        </div>

      </div>
      <div className="right">
        <form action="" className="flex flex-col gap-4 w-140 backdrop-blur-sm border border-white border-2 px-12 py-8">
          <div className="flex flex-col">
            <label className="text-white pb-2">Name</label>
            <input
              type="text"
              className="p-2 bg-black/20 text-white outline-none border-b-2 border-white"
            />
            <p className="text-red-500 text-sm h-4"></p>
          </div>

          <div className="flex flex-col">
            <label className="text-white pb-2">Email</label>
            <input
              type="email"
              className="p-2 bg-black/20 text-white outline-none border-b-2 border-white"
            />
            <p className="text-red-500 text-sm h-4"></p>
          </div>

          <div className="flex flex-col">
            <label className="text-white pb-2">Message</label>
            <textarea className="p-2 bg-black/20 text-white outline-none border-b-2 border-white resize-none"></textarea>
            <p className="text-red-500 text-sm h-4"></p>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-8 font-medium w-fit hover:bg-red-700 transition border m-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
