import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
// import { Link } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
import Absent from "../images/thunder-bolt.png";
import AttendanceExist from "./AttendanceExist";

const FreeToAll = () => {
  const [attendData, setAttendData] = useState(null);
  const [title, setTitle] = useState("title");
  const [startDate, setStartDate] = useState(null);
  const [startTimer, setStartTimer] = useState("10:00");
  const [endTimer, setEndTimer] = useState("10:00");
  const user = useSelector((state) => state.user.userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_SERVER}/availableattendance/${user}`;
        await axios.get(apiUrl).then((response) => {
          const responseData = response.data;
          setAttendData(responseData);
        });
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, [user]);

  const submitOpenToAll = async (ev) => {
    ev.preventDefault();
    const openToAll = true;
    console.log(startDate.getDate());

    // START TIME
    const startTime = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()} ${startTimer}:00`;

    // ENDTIME
    const endTime = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()} ${endTimer}:00`;

    const body = { user, title, startTime, endTime, openToAll };
    try {
      const apiUrl = `${process.env.REACT_APP_SERVER}/createopentoall`;
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

      // setFail(jsonObject);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className=" mb-4 md:mb-0 w-full text-center md:text-start md:w-1/2 md:border-r-2 md:border-r-textBlack">
        <h3 className=" mb-2 md:text-lg font-semibold md:mb-3">
          Create Attendance
        </h3>
        <form onSubmit={submitOpenToAll}>
          <p className="  mb-2">Title</p>
          <span className=" border-[2px] border-textBlack rounded-md p-1 w-[150px] ">
            <input
              type="text"
              name="title"
              className=" outline-none"
              onChange={(ev) => setTitle(ev.target.value)}
              required
            />
          </span>

          <p className=" mb-2 mt-3">Activation Date</p>
          <span className=" border-[2px] border-textBlack rounded-md p-1 w-[150px] ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>

          <p className=" mt-3">Start Time</p>

          <TimePicker
            onChange={setStartTimer}
            value={startTimer}
            className={" border-green-300  outline-none border-[0] shadow-md"}
            required
          />
          <p className=" mt-3">End Time</p>
          <TimePicker
            onChange={setEndTimer}
            value={endTimer}
            className={" border-green-300  outline-none border-[0] shadow-md"}
            required
          />
          <br />

          <button className=" group  mx-auto md:mx-0 flex items-center gap-2 mt-4 hover:bg-projOrange bg-projBlue py-2 px-1 rounded-md">
            <span className=" text-textWhite ">Generate Attendance</span>
            <span className=" text-textOrange group-hover:text-textBlack">
              <FaPenAlt />
            </span>
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className=" text-center mb-3 md:text-lg font-semibold">
          Latest Attendance
        </h3>

        <div className=" w-full">
          {attendData ? (
            <div className=" w-full">
              <AttendanceExist data={attendData} />
            </div>
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

export default FreeToAll;
