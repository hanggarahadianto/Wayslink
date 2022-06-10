import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function MyLink() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [listOfLink, setListOfLink] = useState([]);
  const [searchLink, setSearchLink] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/link").then((response) => {
      console.log(response.data);
      setListOfLink(response.data);
    });
  }, []);

  useEffect(() => {
    const loadLink = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/link");
      setListOfLink(response.data);
      setLoading(false);
    };
    loadLink();
  }, []);

  const deleteLink = (id) => {
    axios
      .delete(`http://localhost:3001/link/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setListOfLink(
          listOfLink.filter((value) => {
            return value.id != id;
          })
        );
      });
  };

  return (
    <div className="relative">
      <div className="">
        <Header />
      </div>

      <div className="mx-auto grid grid-rows-2 gap-4 grid-cols-12 h-screen bg-white">
        <nav className="col-span-3">
          <Navbar />
        </nav>
        <main className="col-span-9 bg-gray-100 mt-16 h-screen">
          <div className="flex h-24 ">
            <p className=" font-bold text-3xl mt-3 ml-10">All Link</p>

            <div className="p-3 ml-5">
              <input
                //   options
                className="block w-96 h-10 px-3 font-medium text-gray-700 rounded transition ease-in-out "
                type="text"
                placeholder="Find you link here"
                onChange={(e) => {
                  setSearchLink(e.target.value);
                }}
              />
            </div>

            <img
              className=" mt-3 ml-10 cursor-pointer h-10"
              src="images/search.png"
              alt=""
            />
          </div>
          <div>
            {listOfLink
              .filter((value) => {
                if (searchLink === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchLink.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((listOfLink) => {
                return (
                  <div key={listOfLink.id}>
                    <div className="grid  grid-cols-12 mb-4 bg-gray-100 hover:bg-gray-200">
                      <div className="col-span-2 ml-4">
                        <img
                          onClick={() => {
                            navigate(`/edit/${listOfLink.id}`);
                          }}
                          className=" rounded-xl cursor-pointer w-32 h-20 object-contain "
                          src={`http://localhost:3001/${listOfLink.image}`}
                          alt=""
                        />
                      </div>
                      <div className="col-span-4 ml-4">
                        <p className="font-bold text-2xl">{listOfLink.title}</p>
                        <p className=" font-medium text-gray-600">
                          {listOfLink.description}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-bold text-2xl">10</p>
                        <p className="text-gray-600">Visit</p>
                      </div>
                      <div className=" col-span-3">
                        <div className="flex mt-4 ">
                          <img
                            onClick={() => {
                              navigate(`/result/${listOfLink.id}`);
                            }}
                            className=" cursor-pointer h-12 mr-5 bg-gray-100 hover:bg-gray-300"
                            src="images/View.png"
                            alt=""
                          />
                          <img
                            onClick={() => {
                              navigate(`/edit/${listOfLink.id}`);
                            }}
                            className=" cursor-pointer h-12 mr-5 bg-gray-100 hover:bg-green-300"
                            src="images/Edit.png"
                            alt=""
                          />
                          <label
                            for="my-modal-4"
                            className="btn modal-button bg-blue-100 border-none hover:bg-red-600"
                          >
                            <Trash3 className="w-8 h-12" />
                          </label>
                        </div>
                        <input
                          type="checkbox"
                          id="my-modal-4"
                          className="modal-toggle"
                        />
                        <label
                          for="my-modal-4"
                          className="modal cursor-pointer"
                        >
                          <label
                            className="modal-box relative bg-slate-100"
                            for=""
                          >
                            <div className=" flex justify-center bg-slate-100">
                              <div className="bg-gray-100 p-4 rounded-md w-11/12">
                                <p className="text-green-400 font-sm text-2xl mt-5 ml-5">
                                  Are you sure want to remove this link ?
                                </p>
                                <div className="flex justify-end p-4 mt-5">
                                  <button
                                    onClick={() => {
                                      deleteLink(listOfLink.id);
                                    }}
                                    className="bg-red-600 rounded-md text-xl w-40 h-10 mr-10"
                                  >
                                    <p className="text-white mt-1">Yes</p>
                                  </button>
                                  <button className="bg-gray-400 rounded-md text-xl h-10 w-40">
                                    <p className="text-white mt-1">No</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </label>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyLink;

{
  /*                  
                            <div className="w-screen flex justify-center">
                              <div className="bg-gray-100 p-4 rounded-md w-4/6">
                                <p className="text-green-400 font-sm text-2xl mt-5 ml-5">Are you sure want to remove this link ?</p>
                                <div className="flex justify-end p-4 mt-5">
                                  <button
                                    onClick={() => {
                                      deleteLink(listOfLink.id);
                                    }}
                                    className="bg-red-600 rounded-md text-xl w-40 h-10 mr-10"
                                  >
                                    <p className="text-white mt-1">
                                      Yes
                                    </p>
                                  </button>
                                  <button className="bg-gray-400 rounded-md text-xl h-10 w-40">
                                    <p className="text-white mt-1">
                                      No
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div> */
}
