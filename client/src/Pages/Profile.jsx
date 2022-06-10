import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
// import { AuthContext } from "../Helpers/AuthContext";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  }, []);
  const onSubmit = (e) => {
    try {
      e.preventDefault();

      const data = new FormData();
      data.set("name", form.name);
      data.set("username", form.username);
      data.set("bio", form.bio);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/profile", data, {
          // headers: {
          //   accessToken: localStorage.getItem("accessToken"),
          // },
        })
        .then((response) => {
          //   const postToAdd = { caption: caption, image: image };
          //   set([...account, accountToAdd]);
          // });
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-white">
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
              <div className="mb-3 px-4 py-2">
                <input
                  placeholder="Name"
                  className="w-96 border-none outline-none text-gray-700 font-bold text-xl"
                />
              </div>
              <div className="mt-10 px-4 py-2">
                <input
                  placeholder="Email"
                  className="w-96 border-none outline-none text-gray-700 font-bold text-xl"
                />
              </div>
            </form>

            <div className="flex justify-end">
              <div className=" mt-10 mr-10">
                <button className="bg-yellow-400 px-8 py-2 rounded-xl w-32">
                  <p className="text-xl font-bold text-gray-600">Edit</p>
                </button>
              </div>
              <div className=" mt-10">
                <button className="bg-red-400 px-8 py-2 rounded-xl w-32">
                  <p className="text-xl font-bold text-gray-600">Delete</p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
