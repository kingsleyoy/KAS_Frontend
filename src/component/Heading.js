import React from "react";

const Heading = (props) => {
  console.log(props.title);
  return (
    <div className="  w-full  h-10 shadow-md font-semibold text-textBlack flex items-center justify-center ">
      {props.title}
    </div>
  );
};

export default Heading;
