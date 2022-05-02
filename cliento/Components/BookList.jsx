import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookList() {
  let navigate = useNavigate();
  let handleClickToBookPreview = () => {
    navigate("/bookpreview");
  };

  const [listOfBook, setListOfBook] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/addbook").then((response) => {
      setListOfBook(response.data);
    });
  }, []);

  return (
    <div className=" mt-5 grid gap-x-2 gap-y-2 grid-cols-4">
      {listOfBook.map((value, key) => {
        return (
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/bookpreview/${value.id}`);
            }}
          >
            <img src="images/pekerjaan.png" alt="" />
            <p className="font-bold text-2xl mt-2 ">{value.title}</p>
            <p className="font-medium text-medium mt-2 text-gray-500">{value.author}</p>
          </div>
        );
      })}
      {/* <div className="items-center">
        <img src="images/serangkai.png" alt="" />
        <div className="">
          <p className="font-bold text-2xl mt-2">Serangkai</p>
          <p className="font-medium text-medium mt-2 text-gray-500">Valerie Patkari</p>
        </div>
      </div>
      <div className="">
        <img src="images/pekerjaan.png" alt="" />
        <p className="font-bold text-2xl mt-2 ">Z1 -Sd/ Buku Siswa Tematik</p>
        <p className="font-medium text-medium mt-2 text-gray-500">Afi Yustia</p>
      </div>
      <div className="">
        <img src="images/kabar.png" alt="" />
        <p className="font-bold text-2xl mt-2">Kabar Rahasia Dari Alam Kubur</p>
        <p className="font-medium text-medium mt-2 text-gray-500">Dr. Kamil Yusuf</p>
      </div> */}
      <div onClick={handleClickToBookPreview} className="cursor-pointer">
        <img src="images/tess.png" alt="" />
        <p className="font-bold text-2xl mt-2">Tess On The Road</p>
        <p className="font-medium text-medium mt-2 text-gray-500">Ratchel Hartman</p>
      </div>
    </div>
  );
}

export default BookList;
