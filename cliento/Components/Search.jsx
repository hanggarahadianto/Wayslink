import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Search() {
  const [loading, setLoading] = useState(false);
  const [listOfLink, setListOfLink] = useState([]);
  const [searchLink, setSearchLink] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/link");
      setListOfLink(response.data);
      setLoading(false);
    };
    loadLink();
  }, []);

  return (
    <div className="grid grid-rows-2 grid-cols-12 h-40">
      <div className="col-span-2">
        <p className=" font-bold text-3xl mr-10">All Link</p>
      </div>

      <div className="col-span-8">
        <div>
          <div className="p-6 mb-5">
            <div className="">
              <input
                //   options
                className="block w-4/6 h-10 px-3 font-medium text-gray-700 rounded transition ease-in-out "
                type="text"
                placeholder="Find you link here"
                onChange={(e) => {
                  setSearchLink(e.target.value);
                }}
              />
            </div>
            <div>
              {listOfLink
                .filter((value) => {
                  if (searchLink === "") {
                    return value;
                  } else if (value.title.toLowerCase().includes(searchLink.toLowerCase())) {
                    return value;
                  }
                })
                .map((value) => {
                  return (
                    <div key={value.id}>
                      <div>{value.title}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <img className=" cursor-pointer h-10 ml-10" src="images/search.png" alt="" />
      </div>
    </div>
  );
}

export default Search;
