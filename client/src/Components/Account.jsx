import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Account() {
  let navigate = useNavigate();
  let handleClickToMyLink = () => {
    navigate("/mylink");
  };
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    link: "",
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
      data.set("link", form.link);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/account", data, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-gray-200 mt-5 rounded-xl">
        <div classname="p-6">
          <div className="flex ">
            {preview && (
              <div>
                <img className="h-28 w-28 p-2" src={preview} alt="" />
              </div>
            )}
            <input onChange={handleChange} multiple="multiple" name="image" type="file" id="upload" />
            <div className="ml-5">
              <p>Title</p>
              <input onChange={handleChange} name="title" className="block w-full px-3 font-medium text-gray-700 rounded transition ease-in-out " type="text" placeholder="Ex. Title Here"></input>
              <p>Link</p>
              <input onChange={handleChange} name="link" className="block w-full px-3 font-medium text-gray-700 rounded transition ease-in-out " type="text" placeholder="Ex. Description Here"></input>
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-3">
            <div className="bg-yellow-400 rounded-lg h-10 w-4/5 text-center">
              <button type="submit" className="text-white font-medium p-2 text-center">
                Add New Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Account;
