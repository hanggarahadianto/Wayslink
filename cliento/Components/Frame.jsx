import React from "react";

function Frame() {
  return (
    <div>
      <div className="relative">
        <img className="absolute" src="images/cover.png" alt="" />
        <img className="absolute " src="images/bg.png" alt="" />
      </div>
      <div className=" grid grid-rows-2 gap-4 grid-cols-12">
        <div className="col-span-6 relative">
          <div className="font-mono ml-10 mt-10">
            <p className="text-7xl text-white font-bold">The Only Link You'll Never Needed</p>

            <p className="text-2xl mt-5 text-white">Add a link for your Social Bio and optimize you social media traffic.</p>

            <p className="text-2xl text-white">Safe, Fast, and Easy to Use</p>

            <img className="mt-20" src="images/button.png" alt="" />
          </div>
        </div>
        <div className="col-span-6 relative">
          <img className="mt-20 absolute ml-16" src="images/PC.png" alt="" />
          <img className="absolute mt-60 " src="images/phone.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Frame;
