import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OfficialDoc = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-screen overflow-y-scroll ">
      <div className="px-2 md:px-8 text-[14px] md:text-[16px] ">
        <div className=" h-4 flex items-center mb-8 mt-3">
          <button onClick={handleBack} className=" text-xl">
            <FaArrowLeft />
          </button>
        </div>
        <h3 className=" text-lg t md:text-xl font-bold text-center md:tracking-wide text-textBlack mb-1">
          Welcome to Kingsley Attendance system!!!{" "}
        </h3>
        <p className=" mb-3">
          The KAS offers two types of attendance system. first the Type 1
          attendance system and next the Type 2 attendance system.
        </p>
        <h2 className=" text-lg font-bold text-textGrad text-textBlack">
          Type 1
        </h2>
        <p>
          {" "}
          The Type 1 attendance system also know as the KAS members attendance
          system is used to generate attendance for people who have an account
          with KAS.
        </p>
        <p>
          In this type of system, the attendance is generated and a key is
          produced for the attendance. the key is to be shared with the members
          of the KAS and they use the key to mark their attendance.
        </p>
        <p>To genenrate an Attendance you have to provide three parameters </p>
        <ol className=" mb-3">
          <li>(1) the date you want the attendance to kick off</li>
          <li>
            (2) the start time and the end time for the attendance once the date
            is activated.
          </li>
        </ol>
        <h3 className=" text-lg font-bold text-textGrad text-textBlack">
          Type 2
        </h3>
        <p className=" mb-3">
          the Type 2 attendance system is used to generate Attendance for people
          who do not have a KAS account. This system generate a link for the
          users which when shared with them will lead them to a form they will
          have to fill to mark their presence.
        </p>
        <span className=" text-[green] underline">Note!!!</span> The creator of
        an attendance can download taken attendance in csv format into their
        devices.
        <h3 className=" text-lg font-bold text-textGrad text-textBlack">
          Mark Attendance
        </h3>
        <p>
          the mark attendance section is where people with active Kas account
          will enter a key to mark their attendance. Note the creator of the
          attendance doesnt need to mark except there is a need to.
        </p>
        <div className=" h-[100px]"></div>
      </div>
    </div>
  );
};

export default OfficialDoc;
