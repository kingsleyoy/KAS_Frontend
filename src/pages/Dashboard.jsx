import React from "react";
import Heading from "../component/Heading";

const Dashboard = () => {
  return (
    <div className=" w-full h-screen overflow-y-scroll">
      <Heading title="DASHBOARD" />
      <div>
        <div className=" flex flex-col md:flex-row gap-3 md:gap-8  mt-4 text-textWhite">
          <div className=" md:w-1/2 px-2  py-2 md:px-4 h-[160px]">
            <div className=" bg-created h-full shadow-lg rounded-md p-2">
              <h5 className=" font-semibold text-[16px] md:text-[18px] text-textWhite">
                Total Attendance created
              </h5>
              <div>
                <p className=" font-semibold text-[13px] md:text-[14px] text-textGrey">
                  KAS members
                </p>
                <p className=" text-[green] font-medium">50</p>
              </div>
              <div>
                <p className=" text-textGrey font-semibold  text-[13px] md:text-[14px]">
                  Open to all
                </p>
                <p className=" text-[green] font-medium">60</p>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 px-2  py-2 md:px-4 h-[160px]">
            <div className=" bg-attended h-full shadow-lg rounded-md p-2">
              <h5 className=" font-semibold text-[16px]  md:text-[18px] text-textWhite">
                Total Event Attended
              </h5>
              <div>
                <p className=" text-textMilk font-semibold  text-[13px] md:text-[14px] ">
                  Total Event{" "}
                </p>
                <p className=" text-[#FFFF00] font-medium">50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
