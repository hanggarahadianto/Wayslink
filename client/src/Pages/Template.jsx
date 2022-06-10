import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { PencilAltIcon, UploadIcon } from "@heroicons/react/solid";
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
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
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
            navigate("/myLink");
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
    <div className="relative bg-white">
      <div className="">
        <Header />
      </div>

      <div className="mx-auto grid grid-rows-2 gap-4 grid-cols-12 h-screen">
        <nav className="col-span-3">
          <Navbar />
        </nav>

        <div className="col-span-9 bg-gray-200 rounded-lg h-screen">
          <p className=" font-bold text-3xl ml-5 mt-5">Create Link</p>

          <div className="flex">
            <div className="bg-gray-100 ml-10 rounded-lg px-4 py-2 mt-10 w-3/5">
              <div className="ml-5 mt-10">
                <form onSubmit={onSubmit} className="">
                  <div className="flex">
                    <div className="bg-green-400 w-32 h-32 rounded-lg">
                      {preview && (
                        <div className="">
                          {/* <img className="h-28 w-28 p-2" src="images/barcode.png" alt="" /> */}
                          <img
                            className="w-32 h-32 object-cover "
                            src={preview}
                            alt=""
                          />
                        </div>
                      )}
                    </div>

                    <div className="relative flex">
                      <UploadIcon className="w-16 ml-10 " />
                      <input
                        onChange={handleChange}
                        multiple="multiple"
                        name="image"
                        type="file"
                        id="upload"
                        className="absolute mt-7 cursor-pointer w-24 h-20 opacity-0"
                      />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden shadow-md mt-10">
                    <div className="mt-3 border-b-4 border-teal-500 py-2">
                      <input
                        onChange={handleChange}
                        name="title"
                        className=" w-80 appearance-none bg-transparent border-none leading-tight outline-none focus:outline-none px-4 py-2"
                        type="text"
                        autocomplete="off"
                        placeholder="Ex. Your Title"
                      ></input>
                    </div>
                    <div className="mt-3 border-b-4 border-teal-500 py-2">
                      <input
                        onChange={handleChange}
                        name="description"
                        className="w-96 appearance-none bg-transparent border-none leading-tight focus:outline-none px-4 py-2"
                        type="text"
                        autocomplete="off"
                        placeholder="Ex. Description Here"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-yellow-400 rounded-lg px-8 py-2 w-96 mt-10">
                      <p className="text-xl font-bold text-gray-700">Publish</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center mt-24 ml-16 ">
                <img src="images/ss1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
