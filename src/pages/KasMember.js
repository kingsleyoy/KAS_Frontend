import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import DataExist from "../component/DataExist";
import DownloadAttendance from "../component/DownloadAttendance";

const KasMember = () => {
  const navigate = useNavigate();
  const data = useParams().id;
  const handleBack = () => {
    navigate(-1);
  };
  const attendData = {
    title: "Human resources",
    id: "12344567777777777777777777776545",
    date: "1/12/12",
    startTime: "2am",
    endTime: "3am",
    attendance: [
      {
        firstName: "Kingsley",
        lastName: "Oyeoka",
        email: "kingeyoyeokz@gmail.com",
      },
      {
        firstName: "Kingsley",
        lastName: "chikeluba",
        email: "kingslkz@gmail.com",
      },
      {
        firstName: "Kingsley",
        lastName: "Oyeoka",
        email: "kingsleyoyz@gmail.com",
      },
    ],
  };
  return (
    <div className="w-full h-screen overflow-y-scroll ">
      <div className="px-2 md:px-8 text-[14px] md:text-[16px] ">
        <div className=" h-4 flex items-center mb-8 mt-3">
          <button onClick={handleBack} className=" text-xl">
            <FaArrowLeft />
          </button>
        </div>
        <p>{attendData.date}</p>
        <h2>{attendData.title}</h2>
        <p>status: {attendData.startTime}</p>
        <div>
          <DownloadAttendance id={data} />
        </div>
        <div>
          <DataExist data={attendData.attendance} />
        </div>
      </div>
    </div>
  );
};

export default KasMember;
