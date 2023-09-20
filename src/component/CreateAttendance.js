import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
import Absent from "../images/thunder-bolt.png";
import { FaArrowDown } from "react-icons/fa";
import AttendanceExist from "./AttendanceExist";

const CreateAttendance = () => {
  // const [attendData, setAttendData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [startTimer, setStartTimer] = useState("10:00");
  const [endTimer, setEndTimer] = useState("10:00");

  const attendData = [
    {
      key: "001",
      title: "Human resources",
      id: "12344567777777777777777777776545",
      date: "1/12/12",
    },
    {
      key: "002",
      title: "Pte 505 ",
      id: "1234456777777878898090767675454545576",
      date: "1/12/12",
    },
  ];
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const startTime = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()} ${startTimer}:00`;
    const endTime = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()} ${endTimer}:00`;
    console.log(startTime);
    console.log(endTime);
  };

  return (
    <div className=" w-full h-screen overflow-y-scroll overflow-x-hidden  ">
      <Heading title="HOME" />
      <div className=" px-2 md:px-8 relative">
        <span className=" z-[999] fixed bottom-5 right-7 text-textBlack bg-projGrad rounded-full p-2 md:p-3 animate-bounce">
          <FaArrowDown />
        </span>
        <div className=" mt-5  mb-10 md:mt-8 md:mb-7">
          <h2 className=" text-lg t md:text-xl font-bold text-center md:tracking-wide text-textBlack mb-1">
            Welcome to Kingsley attendance system!!!
          </h2>
          <p className=" text-[14px] text-center md:text-[15px] mb-6">
            Taking of attendance made easy and efficient
          </p>

          <div className=" text-center">
            <Link
              to={"/officialdoc"}
              className=" bg-projGrad hover:bg-bm px-4 py-2 md:px-5 md:py-3 text-textWhite bg-projBlue rounded-md hover:bg-projOrange hover:text-textBlack"
            >
              Official DOCs
            </Link>
          </div>
        </div>

        {/* KAS MEMBERS ATTENDANCE */}

        <div className=" mb-6 md:text-center md:mb-8 mt-3 ">
          <h3 className=" text-lg font-bold text-textGrad text-textBlack">
            Type 1
          </h3>
          <p className=" text-textBlack opacity-85 text-[12px] font-semibold md:text-sm">
            (KAS Members)
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className=" mb-4 md:mb-0 w-full text-center md:text-start md:w-1/2 md:border-r-2 md:border-r-textBlack">
            <h3 className=" mb-2 md:text-lg font-semibold md:mb-3">
              Create Attendance
            </h3>
            <form onSubmit={handleSubmit}>
              <p className="  mb-2">Title</p>
              <span className=" border-[2px] border-textBlack rounded-md p-1 w-[150px] ">
                <input type="text" name="title" className=" outline-none" />
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
                className={
                  " border-green-300  outline-none border-[0] shadow-md"
                }
                required
              />
              <p className=" mt-3">End Time</p>
              <TimePicker
                onChange={setEndTimer}
                value={endTimer}
                className={
                  " border-green-300  outline-none border-[0] shadow-md"
                }
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

        {/* GENERAL ATTENDANCE SECTION */}
        <div className=" mt-14 mb-6 md:text-center md:mb-8 md:mt-10">
          <h3 className=" text-lg font-bold text-textGrad text-textBlack">
            Type 2
          </h3>
          <p className=" text-textBlack opacity-85 text-[12px] font-semibold md:text-sm">
            (Open to all)
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className=" mb-4 md:mb-0 w-full text-center md:text-start md:w-1/2 md:border-r-2 md:border-r-textBlack">
            <h3 className=" mb-2 md:text-lg font-semibold md:mb-3">
              Create Attendance
            </h3>
            <form onSubmit={handleSubmit}>
              <p className="  mb-2">Title</p>
              <span className=" border-[2px] border-textBlack rounded-md p-1 w-[150px] ">
                <input type="text" name="title" className=" outline-none" />
              </span>

              <p className=" mb-2">Activation Date</p>
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
                className={
                  " border-green-300  outline-none border-[0] shadow-md"
                }
                required
              />
              <p className=" mt-3">End Time</p>
              <TimePicker
                onChange={setEndTimer}
                value={endTimer}
                className={
                  " border-green-300  outline-none border-[0] shadow-md"
                }
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

            <div>
              {attendData ? (
                <p>attendanceExist</p>
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

        {/* MARK ATTENDANCE */}
        <div className=" mt-14 mb-6 md:text-center md:mb-8 md:mt-14 border-t-[1px] border-[#CCC] pt-4 ">
          <h3 className=" text-center text-lg font-bold text-textGrad text-textBlack">
            Mark Attendance
          </h3>
          <p className=" text-textBlack opacity-85 text-[12px] font-semibold md:text-sm text-center">
            (Key needed)
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4  mb-6 md:text-center md:mb-8 mt-3">
          <div className=" mb-4 md:mb-0 w-full text-center md:text-start md:w-1/2 md:border-r-2 md:border-r-textBlack">
            <form onSubmit={handleSubmit}>
              <div className=" border-[1px] rounded-md w-full md:w-[80%] mx-auto md:mx-0">
                <input
                  type="text"
                  className=" w-full transition-all duration-200 p-1"
                  placeholder="Enter key"
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

        <div className=" h-[100px]"></div>
      </div>
    </div>
  );
};

export default CreateAttendance;
