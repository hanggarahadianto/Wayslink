import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

import { useParams } from "react-router-dom";

function Template() {
  let { id } = useParams();
  const [listOfLink, setListOfLink] = useState({});

  let navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const onSubmit = (e) => {
    try {
      e.preventDefault();

      const data = new FormData();
      data.set("title", form.title);
      data.set("description", form.description);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/link", data, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          if (response.data.status == "Success") {
            navigate("/mylink");
          }
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/link/${id}`).then((response) => {
      console.log(response.data);
      setListOfLink(response.data);
    });

    // axios.get(`http://localhost:3001/account/${id}`).then((response) => {
    //   setAccount(response.data);
    // });
  }, []);

  return (
    <div className="relative ">
      <div className="">
        <Header />
      </div>

      <div className="mx-auto grid grid-rows-2 gap-4 grid-cols-12 h-screen">
        <nav className="col-span-3">
          <Navbar />
        </nav>
        <form onSubmit={onSubmit} className="col-span-5 bg-gray-100 mt-5 h-max">
          <div className="p-6 ">
            <p className=" font-bold text-3xl mb-5">Create Link</p>
            <div class="overflow-y-scroll h-96 w-full p-6">
              <div className=" grid grid-cols-12 ">
                <div className="col-span-7">
                  {preview && (
                    <div className="">
                      {/* <img className="h-28 w-28 p-2" src="images/barcode.png" alt="" /> */}
                      <img className="w-40 h-28 object-cover rounded-xl " src={preview} alt="" />
                    </div>
                  )}
                </div>
                <div className="col-span-5">
                  <input onChange={handleChange} multiple="multiple" name="image" type="file" id="upload" />
                </div>
              </div>
              <div className="w-full overflow-hidden shadow-md">
                <div className="mt-3 border-b-4 border-teal-500 py-2">
                  <p className="text-gray-400 font-medium">Title</p>
                  <input onChange={handleChange} name="title" className=" w-80 appearance-none bg-transparent border-none leading-tight outline-none focus:outline-none " type="text" placeholder="Ex. Your Title"></input>
                </div>
                <div className="mt-3 border-b-4 border-teal-500 py-2">
                  <p className="text-gray-400 font-medium">Description</p>
                  <input onChange={handleChange} name="description" className="w-96 appearance-none bg-transparent border-none leading-tight focus:outline-none " type="text" placeholder="Ex. Description Here"></input>
                </div>
              </div>

              <div className="flex justify-center mt-3 mb-3" type="submit">
                <div className="bg-yellow-400 rounded-lg h-10 w-4/5 text-center">
                  <button
                    //
                    className="text-white font-medium p-2 text-center"
                  >
                    Add New Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="col-span-3">
          <div className="flex justify-center mt-24 ml-16 ">
            <img src="images/ss1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
