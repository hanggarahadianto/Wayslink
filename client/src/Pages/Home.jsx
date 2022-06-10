import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function Home() {
  let navigate = useNavigate();

  const handleClickToTemplate = () => {
    navigate("/template");
  };

  return (
    <div className="bg-slate-200 h-full">
      <div className="">
        <Header />
      </div>

      <div className="mx-auto grid grid-rows-2 gap-4 grid-cols-12 h-full">
        <nav className="col-span-3 bg-slate-100">
          <Navbar />
        </nav>
        <main className="col-span-9 bg-slate-200 mt-16 px-4 py-2 rounded-lg">
          <div className="flex justify-start">
            <img
              onClick={handleClickToTemplate}
              className="cursor-pointer"
              src="images/ss1.png"
              alt=""
            />
            <img className="" src="images/ss2.png" alt="" />
            <img className="" src="images/ss3.png" alt="" />
            <img className="" src="images/ss4.png" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
