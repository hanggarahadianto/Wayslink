import React from "react";
import axios from "axios";
import { useState, UseEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import Register from "./Register";
// import { AuthContext } from "../Helpers/AuthContext";

function Login() {
  const [ModalLogin, openLogin, closeLogin, isOpenLogin] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  const [ModalRegister, openRegister, closeRegister, isOpenRegister] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setAuthState } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        // localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("accessToken", response.data.data.token);

        if (response.data.status == "Success") {
          navigate("/home");
        }

        console.log(response.data);

        // if (response.data.role == "admin") {
        //   navigate("/bookadd");
        // } else {
        //   navigate("/home");
        // }
        // setAuthState(true);
        // setAuthState({
        //   email: response.data.email,
        //   id: response.data.id,
        //   status: true,
        // });
        // navigate("/home");
      }
    });
  };
  return (
    <div className="bg-none rounded-xl">
      <form className="rounded-xl">
        <div className="flex items-center justify-center object-center ">
          <div className="w-full max-w-md">
            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div className="flex">
                <h1 className="text-gray-900 font-bold border-b-2 py-2 text-5xl mb-5 mr-20">Login</h1>
              </div>

              <div className="mb-2">
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  autocomplete="off"
                  className="shadow appearance-none border rounded-lg h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                ></input>
              </div>
              <div className="mb-2">
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  autocomplete="off"
                  className="shadow appearance-none border rounded-lg h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  name="password"
                ></input>
              </div>
              <div>
                <button onClick={login} className="w-full px-4 py-2 rounded-xl text-white inline-block shadow-lg bg-yellow-300 mt-8 hover:bg-yellow-400 focus:bg-red-800">
                  Login
                </button>

                {/* <div onClick={closeRegister}>
                  <p onClick={closeLogin} className="cursor-pointer font-medium mt-2 flex justify-center text-xl">
                    Don't have an account? Click Here
                  </p>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </form>

      <ModalRegister>
        <Register />
      </ModalRegister>
      <ModalLogin>
        <Login />
      </ModalLogin>
    </div>
  );
}

export default Login;
