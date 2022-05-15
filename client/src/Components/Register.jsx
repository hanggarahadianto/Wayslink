import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Register() {
  const navigate = useNavigate();

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
          navigate("/home");
        }
        console.log(response.data);
 
      }
    });
  };
  return (
    <div className="bg-none rounded-xl">
      <form className="rounded-3xl">
        <div className="flex items-center justify-center object-center rounded-full">
          <div className="w-full max-w-md ">
            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div className="flex">
                <h1 className="text-gray-900 font-bold border-b-2 py-2 text-5x mb-5 mr-20">Register</h1>
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
              <div className="mb-2">
                <input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  autocomplete="off"
                  className="shadow appearance-none border rounded-lg h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                ></input>
              </div>

              <div>
                <button onClick={register} className="w-full px-4 py-2 rounded-lg text-white inline-block shadow-lg bg-yellow-300 mt-8 hover:bg-yellow-400 focus:bg-red-800">
                  Register
                </button>
  
              </div>
            </form>
          </div>
        </div>
      </form>

    </div>
  );
}

export default Register;
