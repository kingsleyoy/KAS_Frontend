import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import DataExist from "../component/DataExist";
import DownloadAttendance from "../component/DownloadAttendance";
import CopyLink from "../component/CopyLink";
import SocialMedia from "../component/SocialMedia";

const KasMember = () => {
  const navigate = useNavigate();
  const data = useParams().id;
  const [attendData, setAttendData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_SERVER}/showattendance/${data}`;
        await axios.get(apiUrl).then((response) => {
          const responseData = response.data;
          console.log(responseData);
          setAttendData(responseData);
        });
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, [data]);

  const handleBack = () => {
    navigate(-1);
  };

  const date = new Date(`${attendData?.createdAt}`);
  const updatedDate = `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`;

  const startTime = new Date(`${attendData?.startTime}`).getTime();
  const endTime = new Date(`${attendData?.endTime}`).getTime();
  const currentTime = new Date().getTime();

  const status = () => {
    if (startTime <= currentTime && endTime >= currentTime) {
      return <span className=" text-[#242]">Active</span>;
    } else if (startTime <= currentTime) {
      return <span className=" text-[#ff0]">Pending</span>;
    } else if (endTime >= currentTime) {
      return <span className=" text-[#ff0000]">Closed</span>;
    } else {
      return <span>Nil</span>;
    }
  };

  return (
    <div className="w-full h-screen overflow-y-scroll ">
      <div className="px-2 md:px-8 text-[14px] md:text-[16px] ">
        <div className=" h-4 flex items-center mb-8 mt-3">
          <button onClick={handleBack} className=" text-xl">
            <FaArrowLeft />
          </button>
        </div>
        <p>{updatedDate}</p>
        <h2>{attendData?.title}</h2>
        <p>status: {status}</p>
        <p>Key: </p>
        <div>
          <CopyLink link={data} />
        </div>
        <div>
          <SocialMedia link={data} />
        </div>
        <div>
          <DownloadAttendance id={data} />
        </div>
        <div>
          {attendData?.attendees ? (
            <DataExist data={attendData?.attendees} />
          ) : (
            <p>Attendees empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KasMember;
