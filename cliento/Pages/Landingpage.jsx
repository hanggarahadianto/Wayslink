import React from "react";
import { useState } from "react";
// import { Col } from "react-bootstrap";
import { useModal } from "react-hooks-use-modal";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../Context/userContext";
import Header from "../Components/Header";
import Frame from "../Components/Frame";
import Register from "../Components/Register";
import Login from "../Components/Login";

function Landingpage() {
  const navigate = useNavigate();

  const [ModalLogin, openLogin, closeLogin, isOpenLogin] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  const [ModalRegister, openRegister, closeRegister, isOpenRegister] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });

  // const [state] = useContext(UserContext);

  // const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="mx-auto">
      <Header />
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
              <button onClick={openRegister}>
                <img className="mt-20" src="images/button.png" alt="" />
              </button>
              <div className=""></div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <img className="mt-20 absolute ml-16" src="images/PC.png" alt="" />
            <img className="absolute mt-60 " src="images/phone.png" alt="" />
          </div>
        </div>
      </div>

      <ModalRegister>
        <div className="bg-white rounded-xl w-96 flex justify-center">
          <div className="mt-10 w-11/12">
            <Register />
            <button onClick={closeRegister}>
              <p onClick={openLogin} className="cursor-pointer font-medium flex justify-center text-xl ml-3 ">
                Already have an account? Click Here
              </p>
            </button>
          </div>
        </div>
      </ModalRegister>
      <ModalLogin>
        <div className="bg-white rounded-xl w-96 flex justify-center">
          <div className="mt-10 w-11/12">
            <Login />
            <button className="" onClick={closeLogin}>
              <p onClick={openRegister} className="cursor-pointer font-medium  ml-6 flex jusitfy-center text-xl">
                Dont have an account? Click here
              </p>
            </button>
          </div>
        </div>
      </ModalLogin>
    </div>
  );
}

export default Landingpage;
