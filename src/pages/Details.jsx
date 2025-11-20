import React from "react";
import play from '../../public/play.png'
import star from '../../public/Star.png'
import backIcon from '../../public/back.png'

export default function Details() {
  return (
    <div className="flex bg-black py-8 px-20 gap-20">
      <div className="left w-120">
        <img src="../../public/images/1.jpeg" alt="" />
      </div>
      <div className="right flex flex-col border border-white border-x-0 border-y-4 py-12 w-full gap-8 justify-center">
        <h1 className="text-white text-4xl font-bold">The Fantastic Four</h1>
        <div className="little-details flex gap-4 items-center">
            <div className="bg-red-500 text-white px-4 py-1 w-fit">HD</div>
            <div className="rating flex gap-2 items-center">
                <p className="text-white/80">7.9/10</p>
                <img src={star} alt="" width={30} height={30}/>
            </div>
            <p className="text-white/80">97 min</p>
        </div>
        <p className="text-white">
          Forced to balance their roles as heroes with the strength of their
          family bond, the Fantastic Four must defend Earth from a ravenous
          space god called Galactus and his enigmatic herald, the Silver Surfer.
        </p>
        <div className="infos flex flex-col gap-2">
           <div className="country flex gap-2">
                <p className="text-white/80">Country:</p>
                <p className="text-white">United-States</p>
           </div>
           <div className="genres flex gap-2">
                <p className="text-white/80">Genres:</p>
                <p className="text-white">Sci-Fi, Sci-Fi Epic, Adventure</p>
           </div>
           <div className="Released flex gap-2">
                <p className="text-white/80">Released:</p>
                <p className="text-white">2025-01-01</p>
           </div>
           <div className="Casts flex gap-2">
                <p className="text-white/80">Casts:</p>
                <p className="text-white">Pedro PascalVanessa KirbyEbon Moss-Bachrach</p>
           </div>
        </div>
        <button className="flex bg-red-500 px-4 py-2 font-medium text-white items-center gap-2 w-fit cursor-pointer hover:bg-red-600 border">
          <img src={backIcon} alt="play icon" className="w-4 h-4" />
          Get Back
        </button>
      </div>
    </div>
  );
}
