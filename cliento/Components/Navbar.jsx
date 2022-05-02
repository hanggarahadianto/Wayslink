import React from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let handleClickToProfile = () => {
    navigate("/profile");
  };
  let handleClickToTemplate = () => {
    navigate("/template");
  };

  let handleClickToMyLink = () => {
    navigate("/mylink");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/landingpage");
  };

  return (
    <div className="flex w-full justify-center h-full">
      <div className="">
        <div className=" cursor-pointer flex justify-between flex-col font-mono text-gray-400 font-bold text-2xl">
          <div onClick={handleClickToTemplate} className=" flex mt-5 bg-gray-10 hover:bg-gray-300">
            <img className="h-7" src="images/template.png" alt="" />
          </div>
          <div onClick={handleClickToProfile} className=" flex mt-5 bg-gray-10 hover:bg-gray-300">
            <img className="h-7" src="images/profile.png" alt="" />
          </div>
          <div onClick={handleClickToMyLink} className=" flex mt-5 bg-gray-10 hover:bg-gray-300">
            <img className="h-7" src="images/mylink.png" alt="" />
          </div>

          <div onClick={logout} className=" flex mt-40 bg-gray-10 hover:bg-gray-300">
            <img className="h-7" src="images/logout.png" alt="" />
          </div>
        </div>
        {/* ICON */}
      </div>
    </div>
  );
}

export default Navbar;
