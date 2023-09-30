import React, { useState } from "react";
import axios from "axios";
import { FaBookOpen } from "react-icons/fa";

const OpenToAllForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fail, setFail] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const body = { firstName, lastName, email };
    setLoading(true);
    try {
      const apiUrl = `${process.env.REACT_APP_SERVER}/login`;
      const response = await axios.post(apiUrl, body);
      alert(response.data);
    } catch (error) {
      const err = error.request.response;
      console.error("error:", err);
      const jsonString = `${err}`;
      const jsonObject = JSON.parse(jsonString);
      setFail(jsonObject);
    }

    setLoading(false);
  };

  return (
    <div className=" w-full h-screen">
      <div className=" w-full flex flex-col justify-center items-center h-full bg-projForm">
        <div className=" mb-2 md:mb-4">
          <span className=" text-5xl md:text-6xl text-[#E66A30]">
            <FaBookOpen />
          </span>
        </div>
        <h3 className=" text-textWhite mb-4 font-bold text-[18px] md:text-2xl tracking-wide">
          Attendance Form
        </h3>

        <div className=" w-[90%] md:w-[40%] text-textBlack  mx-auto ">
          <form className=" w-full " onSubmit={handleSubmit}>
            <div className=" flex mb-1 shadow-lg  relative">
              <input
                type="text"
                placeholder="first name"
                className="  px-3 py-2 w-full border-none rounded-lg outline-textOrange"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                required
              />
            </div>
            <div className=" flex mb-1 shadow-lg  relative">
              <input
                type="text"
                placeholder="last name"
                className="  px-3 py-2 w-full border-none rounded-lg outline-textOrange"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
                required
              />
            </div>
            <div className=" flex mb-1 shadow-lg relative">
              <input
                type="text"
                placeholder="email"
                className=" px-3 py-2 w-full rounded-lg outline-textOrange"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
              />
            </div>

            <div className=" flex justify-between">
              <span className=" flex items-center justify-center">
                <button className=" text-[15px] md:text-base w-full hover:bg-projBlue rounded-md bg-green-500 px-2 py-3 md:px-3 md:py-3 text-[#222] font-bold tracking-wide bg-projOrange">
                  {loading ? "Loading..." : "Mark Attendance"}
                </button>
              </span>
            </div>
            <div>{fail}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenToAllForm;
