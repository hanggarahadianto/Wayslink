import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Home from "../../Pages/Home";
function Login() {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.data.token);

        if (response.data.status == "Success") {
          // navigate("/home");
        }

        console.log(response.data);
      }
    });
  };

  return (
    <div className="">
      <div className="mt-10">
        <label for="my-modal-4" className="btn modal-button px-8 mr-8 ">
          <p className="text-gray-200 font-bold">Sign In</p>
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label for="my-modal-4" className="modal cursor-pointer ">
          <label className="modal-box relative" for="">
            <h3 class="text-4xl font-bold ml-10">Login</h3>
            <div className="flex justify-center">
              <form className="text-center">
                <div className="mt-12">
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    name="email"
                    value={email}
                    autoComplete="off"
                    type="text"
                    placeholder="Email"
                    className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                  ></input>

                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                  ></input>
                  <div className="flex justify-center mt-12">
                    <button
                      disabled={!email || !password}
                      type="submit"
                      name="submit"
                      onClick={login}
                      className="background px-8 py-2 rounded-md w-96"
                    >
                      <p className="text-xl text-gray-200 font-bold">Login</p>
                    </button>
                  </div>
                  <div className="mt-8">
                    <p className="font-bold text-xl cursor-pointer">
                      Don't have and account? Click Here
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}

export default Login;
