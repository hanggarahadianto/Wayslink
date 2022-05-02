import React from "react";
import { useNavigate } from "react-router";
import { useModal } from "react-hooks-use-modal";
import Login from "./Login";
import Register from "./Register";
function Header() {
  const [ModalLogin, openLogin, closeLogin, isOpenLogin] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  const [ModalRegister, openRegister, closeRegister, isOpenRegister] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  let navigate = useNavigate();
  let handleClickToHome = () => {
    navigate("/home");
  };

  return (
    <div className="h-16">
      <div className="ml-20 mt-3 absolute">
        <img onClick={handleClickToHome} className="cursor-pointer" src="images/frame.png" alt="" />
      </div>

      {/* <div className="ml-20 mt-3 absolute">
        <img className="" src="images/frame.png" alt="" />
      </div> */}

      {/* <div className="flex justify-end ">
        <div className="mt-4">
          <img onClick={openLogin} className="mr-20 cursor-pointer" src="images/login.png" alt="" />
        </div>
        <div className="pb-4 mt-3">
          <img onClick={openRegister} className="mr-10 cursor-pointer" src="images/register.png" alt="" />
        </div>
      </div> */}
      {/* <ModalRegister>
        <div className="bg-white rounded-xl w-96 flex justify-center">
          <div className="mt-10">
            <Register />
            <button onClick={closeRegister}>
              <p onClick={openLogin} className="cursor-pointer font-medium flex justify-center text-xl">
                Already have an account? Click Here
              </p>
            </button>
          </div>
        </div>
      </ModalRegister>
      <ModalLogin>
        <div className="bg-white rounded-xl w-96 flex justify-center">
          <div className="mt-10">
            <Login />
            <button onClick={closeLogin}>
              <p onClick={openRegister} className="cursor-pointer font-medium flex justify-center text-xl">
                Dont have an account? Click here
              </p>
            </button>
          </div>
        </div>
      </ModalLogin> */}
    </div>
  );
}

export default Header;
