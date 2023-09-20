import React from "react";

const DataExist = ({ data }) => {
  return (
    <table class="table-fixed w-full border-separate border-spacing-2">
      <thead>
        <tr className="  text-left text-[14px] md:text-base">
          <th>First Name</th>
          <th>Last Name</th>
          <th className="hidden md:block">Email</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.email} className=" text-sm md:text-base">
            <td className=" overflow-hidden">{item.firstName}</td>
            <td className=" overflow-hidden">{item.lastName}</td>
            <td className=" overflow-hidden hidden md:block">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataExist;
