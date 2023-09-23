import React from "react";
import { useNavigate } from "react-router-dom";

const AttendanceExist = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigate(`kasmember/${id}`);
  };
  return (
    <table class="table-fixed w-full border-separate border-spacing-2">
      <thead>
        <tr className="  text-left text-[14px] md:text-base">
          <th>Title</th>
          <th>Key</th>
          <th className="hidden md:block">Date</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            onClick={() => handleClick(item._id)}
            className=" cursor-pointer"
          >
            <td className=" overflow-hidden">{item.title}</td>
            <td className=" overflow-hidden">{item._id}</td>
            <td className="hidden md:block">{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceExist;
