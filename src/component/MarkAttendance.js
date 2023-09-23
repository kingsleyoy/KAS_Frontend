import React, { useState } from "react";
import axios from "axios";
import Absent from "../images/thunder-bolt.png";
import { FaPenAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const MarkAttendance = () => {
  const [attendData, setAttendData] = useState(null);
  const [mark, setMark] = useState(null);

  const user = useSelector((state) => state.user.userId);

  const handleMark = async (ev) => {
    ev.preventDefault();
    const body = {
      creator: mark,
      attendant: user,
    };

    try {
      const apiUrl = `${process.env.REACT_APP_SERVER}/markattendance`;
      await axios
        .post(apiUrl, body)
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
          // refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      const err = error.request.response;
      console.error("error:", err);
      const jsonString = `${err}`;
      // const jsonObject = JSON.parse(jsonString);
      // setFail(jsonObject);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4  mb-6 md:text-center md:mb-8 mt-3">
      <div className=" mb-4 md:mb-0 w-full text-center md:text-start md:w-1/2 md:border-r-2 md:border-r-textBlack">
        <form onSubmit={handleMark}>
          <div className=" border-[1px] rounded-md w-full md:w-[80%] mx-auto md:mx-0">
            <input
              type="text"
              className=" w-full transition-all duration-200 p-1"
              placeholder="Enter key"
              onChange={(ev) => setMark(ev.target.value)}
              required
            />
          </div>

          <button className=" group bg-projGrad hover:bg-bm mx-auto md:mx-0 flex items-center gap-2 mt-4  py-2 px-1 rounded-md">
            <span className=" text-textWhite ">Mark Attendance</span>
            <span className=" text-textBlack group-hover:text-textBlack">
              <FaPenAlt />
            </span>
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className=" text-center mb-3 md:text-lg font-semibold">
          Events attended
        </h3>

        <div>
          {attendData ? (
            <div>data exists</div>
          ) : (
            <div className=" h-[150px] w-[150px] mx-auto">
              <figure>
                <img src={Absent} alt="unavailable" />
              </figure>
              <p className=" text-[12px]">No available attendance</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
