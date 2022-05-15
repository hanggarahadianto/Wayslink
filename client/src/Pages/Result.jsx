import React from "react";
import { navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Result() {
  let { id } = useParams();
  const [listOfLink, setListOfLink] = useState({});
  const [account, setAccount] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/link/${id}`).then((response) => {
      console.log(response.data);
      setListOfLink(response.data);
    });

    axios.get(`http://localhost:3001/account/${id}`).then((response) => {
      setAccount(response.data);
    });
  }, []);

  return (
    <div>
      <div key={listOfLink.id}>
        <div className="text-center mt-10">
          <img src={`http://localhost:3001/${listOfLink.image}`} class="w-32 h-32 mb-10 mx-auto object-contain rounded-full border-8 border-green-400" alt="Avatar" />
          <h5 className="text-4xl font-bold leading-tight mb-2">{listOfLink.title}</h5>
          <p className="text-gray-500 text-2xl font-medium">{listOfLink.description}</p>
        </div>
      </div>
      );
      {account.map((account) => {
        return (
          <div key={account.id}>
            <div className="mt-2">
              <div className="flex justify-center mb-3">
                <div className="bg-black w-3/5 h-20 flex rounded-lg">
                  <img src={`http://localhost:3001/${account.image}`} className=" ml-10 p-2 rounded-full w-20 h-20 object-contain " alt="Avatar" />
                  <div className=" justify-center flex mt-2">
                    {/* <p className="font-bold text-gray-400 text-3xl p-4">{account.title}</p> */}
                    <p className=" font-medium text-2xl ml-56 mt-1 text-gray-200 p-2">{account.link}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
