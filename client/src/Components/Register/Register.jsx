import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Register() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = (e) => {
    e.preventDefault();
    const data = { email: email, password: password, name: name };
    axios.post("http://localhost:3001/auth/register", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.data.token);
        if (response.data.status == "Success") {
          //   navigate("/home");
        }
        console.log(response.data);
      }
    });
  };

  return (
    <div>
      <div className="mt-10">
        <label
          for="my-modal-5"
          className="btn modal-button bg-gray-800 px-8 py-2"
        >
          <p className="font-bold text-gray-200 mt-1">Sign Up</p>
        </label>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <label for="my-modal-5" className="modal cursor-pointer">
          <label className="modal-box relative" for="">
            <h3 class="text-4xl font-bold ml-10">Register</h3>
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
                  <input
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    type="text"
                    name="name"
                    value={name}
                    autoComplete="off"
                    placeholder="Name"
                    className="text-gray-800 px-4 placeholder:text-gray-700 font-semibold py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                  ></input>
                  <div className="flex justify-center mt-12">
                    <button
                      disabled={!email || !password | !name}
                      onClick={register}
                      className="background px-8 py-2 rounded-md w-96"
                    >
                      <p className="text-xl text-gray-200 font-bold">
                        Register
                      </p>
                    </button>
                  </div>
                  <div className="mt-8">
                    <label for="my-modal-4">
                      <p className="font-bold text-xl cursor-pointer">
                        Already have an account? Click here
                      </p>
                    </label>
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

export default Register;
