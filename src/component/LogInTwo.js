import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setAuth } from "../redux/Reducers";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
// import { Oval } from "react-loader-spinner";
import GoogleLogIn from "../component/GoogleLogIn";

const LogInTwo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState(null);

  const [text] = useTypewriter({
    words: [
      "Taking of Attendance made easy.",
      "Track record stored.",
      "Downloadable attendance.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const dispatch = useDispatch();

  const handleLogIn = async (ev) => {
    ev.preventDefault();
    const body = { email, password };
    setLoading(true);
    try {
      const apiUrl = `${process.env.REACT_APP_SERVER}/login`;
      const response = await axios.post(apiUrl, body);
      console.log(response.status);
      dispatch(setAuth(true));
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
        <div className=" mb-5 md:mb-8">
          <h2 className=" text-textWhite font-bold text-[18px] md:text-2xl tracking-wide">
            Kinsley Attendance System
          </h2>
          <p className=" text-[15px]">
            <span className=" text-textGrey font-semibold">{text}</span>
            <span className=" text-xl font-bold">
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#E55604"
              />
            </span>
          </p>
        </div>

        <div className=" w-[90%] md:w-[40%] text-textBlack  mx-auto ">
          <GoogleLogIn title={"Sign in with google"} />

          <form className=" w-full " onSubmit={handleLogIn}>
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

            <div className=" flex mb-1 shadow-lg  relative">
              <input
                type="text"
                placeholder="password"
                className="  px-3 py-2 w-full border-none rounded-lg outline-textOrange"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
            </div>
            {/* <button className=" w-full bg-green-500 p-2 text-white font-bold tracking-wide">
            {loading ? (
              <Oval color="#fff" height={15} width={15} />
            ) : (
              "Register"
            )}
          </button>
          <br /> */}
            <div className=" flex justify-between">
              <span className="  w-1/3 flex items-center justify-center">
                <button className=" text-[15px] md:text-base w-full hover:bg-projBlue rounded-md bg-green-500 px-2 py-3 md:px-3 md:py-3 text-[#222] font-bold tracking-wide bg-projOrange">
                  {loading ? "Loading..." : "Login"}
                </button>
              </span>
              <span className=" font-medium tracking-wide w-full text-[15px] md:text-base text-textOrange text-end">
                <Link className=" hover:text-textWhite">Forgot password</Link>
                <br />
                <Link className=" hover:text-textWhite">Sign up</Link>
              </span>
            </div>
            <div>{fail}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInTwo;
