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
    navigate("/myLink");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/landingPage");
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <div className=" cursor-pointer flex justify-between flex-col font-mono text-gray-400 font-bold text-2xl">
          <div
            onClick={handleClickToTemplate}
            className=" flex mt-12 bg-gray-10 hover:opacity-110"
          >
            <img className="h-7" src="images/Template.png" alt="" />
          </div>
          <div
            onClick={handleClickToProfile}
            className=" flex mt-10 bg-gray-10 hover:opacity-110"
          >
            <img className="h-7" src="images/Profile.png" alt="" />
          </div>
          <div
            onClick={handleClickToMyLink}
            className=" flex mt-10 bg-gray-10 hover:opacity-110"
          >
            <img className="h-7" src="images/MyLink.png" alt="" />
          </div>

          <div
            onClick={logout}
            className=" flex mt-60 bg-gray-10 hover:opacity-110"
          >
            <img className="h-7" src="images/Logout.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
