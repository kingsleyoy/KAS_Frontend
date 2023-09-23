import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../component/Heading";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

const Profile = () => {
  const [attendData, setAttendData] = useState(null);
  const user = useSelector((state) => state.user.userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_SERVER}/profiledetail/${user}`;
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

  return (
    <div className="w-full">
      <Heading title="PROFILE" />
      <div className=" flex flex-col items-center mt-9">
        <div className=" text-[100px] md:text-[150px] text-center mb-4 text-[#CCC]">
          <BsPersonCircle />
        </div>
        <div className=" text-[14px] md:text-base font-semibold text-center">
          {attendData ? (
            <div>
              <p>{attendData?.firstName}</p>
              <p>{attendData?.lastName}</p>
              <p>{attendData?.email}</p>
            </div>
          ) : (
            <p>Not connected to internet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
