import React from "react";
import Heading from "../component/Heading";
import { BsPersonCircle } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="w-full">
      <Heading title="PROFILE" />
      <div className=" flex flex-col items-center mt-9">
        <div className=" text-[100px] md:text-[150px] text-center mb-4 text-[#CCC]">
          <BsPersonCircle />
        </div>
        <div className=" text-[14px] md:text-base font-semibold text-center">
          <p>Kingsley</p>
          <p>Oyeoka</p>
          <p>kingsleyoyeokz@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
