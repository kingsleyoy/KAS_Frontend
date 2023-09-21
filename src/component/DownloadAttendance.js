import React from "react";

const DownloadAttendance = ({ id }) => {
  const downloadCSV = async (ev) => {
    ev.preventDefault();
    try {
      const apiUrl = `http://localhost:5000/downloadattendance/${id}`;
      const response = await fetch(apiUrl);
      // "http://localhost:5000/downloadattendance/6501e295d656656f1035599a"
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={downloadCSV}
      className=" bg-projGrad hover:bg-bm px-2 py-2 md:px-5 md:py-3 text-textWhite bg-projBlue rounded-md hover:bg-projOrange hover:text-textBlack"
    >
      Download Attendance
    </button>
  );
};

export default DownloadAttendance;
