import React, { useRef } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyLink = ({ link }) => {
  const linkRef = useRef(null);

  const copyToClipboard = async () => {
    try {
      if (linkRef.current) {
        await navigator.clipboard.writeText(link);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Failed to copy link: ", error);
    }
  };
  return (
    <div className=" flex gap-4 items-center">
      <input type="text" ref={linkRef} value={link} readOnly />
      <span onClick={copyToClipboard} className=" w-4 text-xl md:text-2xl">
        <FaRegCopy />
      </span>
    </div>
  );
};

export default CopyLink;
