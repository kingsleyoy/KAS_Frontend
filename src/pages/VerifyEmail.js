import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const email = useParams().id;

  const resendEmail = async () => {
    try {
      // const apiUrl = `http://localhost:5000/resendemail/${email}`;
      const apiUrl = `https://kas-server.onrender.com/resendemail/${email}`;
      const response = await axios.get(apiUrl);

      console.log("response data:", response.data);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <div className=" w-full h-screen">
      <div>
        <div className=" mb-4 bg-projGrad h-20 text-[16px] md:text-xl text-center flex items-center justify-center text-textWhite font-semibold">
          <span>THANKS FOR SIGNING UP🎈</span>
        </div>
        <div className=" w-[90%] md:w-[80%] mx-auto text-[15px] md:text-base">
          <p className=" mb-2 ">
            A verification link was sent to{" "}
            <span className=" bg-projBlue text-textWhite p-1 md:p-2">{` ${email}`}</span>
          </p>
          <p className=" mb-3 ">
            If no link was sent make sure you entered a valid email and click on
            the resend button
          </p>
          <button
            onClick={resendEmail}
            className=" bg-projGrad hover:bg-bm px-4 py-2 md:px-5 md:py-3 text-textWhite bg-projBlue rounded-md hover:bg-projOrange hover:text-textBlack"
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
