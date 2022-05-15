import React from "react";
import { useNavigate } from "react-router";


function Header() {

  let navigate = useNavigate();
  let handleClickToHome = () => {
    navigate("/home");
  };

  return (
    <div className="h-16">
      <div className="ml-20 mt-3 absolute">
        <img onClick={handleClickToHome} className="cursor-pointer" src="images/frame.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
