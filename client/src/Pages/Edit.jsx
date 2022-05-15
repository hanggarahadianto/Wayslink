import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import {
  TrashIcon,
  PencilAltIcon,
  UploadIcon,
  LinkIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Edit() {
  let { id } = useParams();
  let navigate = useNavigate();
  let handleClickToMyLink = () => {
    navigate("/mylink");
  };
  const [preview, setPreview] = useState(null);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [image, setImage] = useState("");

  const [listOfLink, setListOfLink] = useState({});
  const [account, setAccount] = useState([]);

  const [form, setForm] = useState({
    title: "",
    link: "",
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

  const addAccount = (e) => {
    try {
      e.preventDefault();

      //   const data = new FormData();
      //   data.set("title", form.title);
      //   data.set("link", form.link);
      //   data.set("image", form.image[0], form.image[0].name);
      //   data.set("linkId", form.linkId.id);

      axios
        // .post("http://localhost:3001/account", data, {
        .post(
          "http://localhost:3001/account",
          {
            title: title,
            link: link,
            linkId: id,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          const accountToAdd = { title: title, link: link };
          setAccount([...account, accountToAdd]);
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

    axios.get(`http://localhost:3001/account/${id}`).then((response) => {
      setAccount(response.data);
    });
  }, []);

  const editLink = (option) => {
    if (option == "title") {
      let newTitle = prompt("Enter New Title : ");
      axios.put(
        "http://localhost:3001/link/title",
        {
          newTitle: newTitle,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      );
      setListOfLink({ ...listOfLink, title: newTitle });
    } else {
      let newDescription = prompt("Enter New Description : ");
      axios.put(
        "http://localhost:3001/link/description",
        {
          newDescription: newDescription,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      );
      setListOfLink({ ...listOfLink, description: newDescription });
    }
  };

  const deleteAccount = (id) => {
    axios
      .delete(`http://localhost:3001/account/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setAccount(
          account.filter((value) => {
            return value.id != id;
          })
        );
      });
  };

  return (
    <div className="mx-auto grid grid-rows-2 grid-cols-12">
      <div className="col-span-5">
        <div>
          <form className=" mt-5 ml-5 rounded-xl">
            <div className="p-6 bg-gray-200">
              <div className=" ">
                {preview && (
                  <div>
                    <img className="h-28 w-28 p-2" src={preview} alt="" />
                  </div>
                )}

                <input
                  className="overflow-hidden"
                  multiple="multiple"
                  name="image"
                  type="file"
                  id="upload"
                ></input>

                <div className="ml-5 mt-3 border-b-4 border-teal-500 py-2">
                  <p>Title</p>
                  <input
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    name="title"
                    className="appearance-none bg-transparent border-none leading-tight outline-none focus:outline-none "
                    type="text"
                    placeholder="Ex. Title Here"
                  ></input>
                </div>
                <div className="ml-5 mt-3 border-b-4 border-teal-500 py-2">
                  <p>Link</p>
                  <input
                    value={link}
                    onChange={(event) => {
                      setLink(event.target.value);
                    }}
                    name="link"
                    className="appearance-none bg-transparent border-none leading-tight outline-none focus:outline-none "
                    type="text"
                    placeholder="Ex. Description Here"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3 mb-3">
              <div className="bg-yellow-400 rounded-lg h-10 w-4/5 text-center">
                <button
                  onClick={addAccount}
                  className="text-white font-medium p-2 text-center"
                >
                  Add New Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-6 mt-10 flex justify-center">
        <div className=" h-[600px] w-[360px] bg-black rounded-[40px] shadow-md overflow-hidden border-[10px] border-black ml-20">
          <div className="bg-gray-200 h-full w-full shadow-lg">
            <div className="bg-black h-6 w-40 mx-auto rounded-b-xl">i</div>
            <div className="" key={listOfLink.id}>
              <div className="text-center mt-10">
                <div className="flex justify-center">
                  <img
                    src={`http://localhost:3001/${listOfLink.image}`}
                    className="w-24 h-24 mx-auto object-contain rounded-full border-4 border-green-400"
                    alt="Avatar"
                  />
                </div>
                <div className="flex justify-center">
                  <h5 className="text-2xl font-bold leading-tight mt-2">
                    {listOfLink.title}
                  </h5>
                  <PencilAltIcon
                    className="h-4 cursor-pointer"
                    onClick={() => {
                      editLink("title");
                    }}
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <h5 className="text-gray-500 text-md font-medium">
                    {listOfLink.description}
                  </h5>
                  <PencilAltIcon
                    className="h-4 cursor-pointer"
                    onClick={() => {
                      editLink("description");
                    }}
                  />
                </div>
              </div>
            </div>
            {account.map((account) => {
              return (
                <div key={account.id}>
                  <div className="">
                    <div className="flex justify-center">
                      <div className="bg-black w-60 h-12 mb-2 flex rounded-lg">
                        <div className="flex justify-center">
                          <img
                            src={`http://localhost:3001/${account.image}`}
                            className=" ml-2 p-2 rounded-full w-12 h-12 object-fit"
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex">
                          <div className=" text-center flex">
                            <p className="font-bold text-gray-400 text-xl p-2 ml-3">
                              {account.title}
                            </p>
                            {/* <p className=" font-medium text-xs text-gray-200 p-2 mt-1 ml-3">{account.link}</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="  ">
                        <div className="justify-content">
                          <TrashIcon
                            onClick={() => {
                              deleteAccount(account.id);
                            }}
                            className="text-red-500 cursor-pointer h-5 w-5  "
                          ></TrashIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ml-10">
          <button
            onClick={handleClickToMyLink}
            className="bg-yellow-300 rounded-xl w-40 h-10 text-center p-2"
          >
            <p className="text-white font-bold">Finish</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
