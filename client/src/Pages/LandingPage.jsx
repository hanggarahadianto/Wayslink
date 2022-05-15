import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Header from "../Components/Header";
import Register from "../Components/Register";
import Login from "../Components/Login";

import "../App.css";

function LandingPage() {
  const navigate = useNavigate();

  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openLogin() {
  //   setIsOpen(true);
  // }
  const [loginIsOpen, setLoginIsOpen] = React.useState(false);
  function openLogin() {
    setLoginIsOpen(true);
  }
  const [registerIsOpen, setRegisterIsOpen] = React.useState(false);
  function openRegister() {
    setRegisterIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setLoginIsOpen(false);
  }
  function closeModal() {
    setRegisterIsOpen(false);
  }

  return (
    <div className="mx-auto">
      <Header />
      <div>
        <div className="relative">
          <img className="absolute" src="images/Cover.png" alt="" />
          <img className="absolute " src="images/Bg.png" alt="" />
        </div>
        <div className=" grid grid-rows-2 gap-4 grid-cols-12">
          <div className="col-span-6 relative">
            <div className="font-mono ml-10 mt-10">
              <p className="text-7xl text-white font-bold">
                The Only Link You'll Never Needed
              </p>

              <p className="text-2xl mt-5 text-white">
                Add a link for your Social Bio and optimize you social media
                traffic.
              </p>

              <p className="text-2xl text-white">Safe, Fast, and Easy to Use</p>
              <button onClick={() => setRegisterIsOpen(true)}>
                <img className="mt-20" src="images/Button.png" alt="" />
              </button>

              <Modal
                className={{
                  base: "content-base",
                  afterOpen: "content-after",
                  beforeClose: "content-before",
                }}
                closeTimeoutMS={500}
                overlayClassName={{
                  base: "overlay-base",
                  afterOpen: "overlay-after",
                  beforeClose: "overlay-before",
                }}
                isOpen={registerIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
              >
                <div className="bg-gray-100">
                  <Register />
                  <button onClick={() => setRegisterIsOpen(false)} className="">
                    <p
                      onClick={() => setLoginIsOpen(true)}
                      className="cursor-pointer font-medium  ml-6 flex justify-center text-xl"
                    >
                      Dont have an account? Click here
                    </p>
                  </button>
                </div>
              </Modal>
              <Modal
                className={{
                  base: "content-base",
                  afterOpen: "content-after",
                  beforeClose: "content-before",
                }}
                closeTimeoutMS={500}
                overlayClassName={{
                  base: "overlay-base",
                  afterOpen: "overlay-after",
                  beforeClose: "overlay-before",
                }}
                isOpen={loginIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
              >
                <div className="bg-gray-100">
                  <Login />
                  <button onClick={() => setLoginIsOpen(false)} className="">
                    <p
                      onClick={() => setRegisterIsOpen(true)}
                      className="cursor-pointer font-medium  ml-6 flex justify-center text-xl"
                    >
                      Dont have an account? Click here
                    </p>
                  </button>
                </div>
              </Modal>
            </div>
          </div>
          <div className="col-span-6 relative">
            <img className="mt-20 absolute ml-16" src="images/PC.png" alt="" />
            <img className="absolute mt-60 " src="images/Phone.png" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="bg-white rounded-xl w-96 flex justify-center">
        <div className="mt-10 w-11/12">
          <Register />
          <button>
            <p className="cursor-pointer font-medium flex justify-center text-xl ml-3 ">
              Already have an account? Click Here
            </p>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl w-96 flex justify-center">
        <div className="mt-10 w-11/12">
          <Login />
          <button className="">
            <p className="cursor-pointer font-medium  ml-6 flex justify-center text-xl">
              Dont have an account? Click here
            </p>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
