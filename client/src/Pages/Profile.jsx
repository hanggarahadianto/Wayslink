import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
// import { AuthContext } from "../Helpers/AuthContext";

function Profile() {
  const [authState, setAuthState] = useState({
    email: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            email: response.data.email,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <div className="relative">
      <div className="">
        <Header />
      </div>

      <div className="mx-auto grid grid-rows-2 gap-4 grid-cols-12 h-screen">
        <nav className="col-span-3">
          <Navbar />
        </nav>
          <main className="col-span-9 bg-gray-100 mt-16 h-screen">
            <div className="p-6">
              <p className=" font-bold text-3xl">My Information</p>
              <form className="block p-6 rounded-lg shadow-lg bg-white mt-5 ">
                <div className="mb-3">
                  <p className="text-gray-400 font-medium">Name</p>
                  <p className="font-bold text-xl">{authState.name}</p>
                </div>
                <div className="mt-10">
                  <p className="text-gray-400 font-medium">Email</p>
                  <p className="font-bold text-xl">{authState.email}</p>
                </div>
              </form>
              <div className="flex justify-end mt-10">
                <img className="mr-10 cursor-pointer" src="images/save.png" alt="" />
                <img className="mr-10 cursor-pointer" src="images/delete.png" alt="" />
              </div>
            </div>
          </main>
      </div>
    </div>
  );
}

export default Profile;
