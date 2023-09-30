import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMedia = ({ link }) => {
  return (
    <div className=" flex items-center">
      <h2>share link:</h2>
      <div className=" flex gap-3 md:gap-6 items-center ml-3 py-3">
        <FacebookShareButton url={link}>
          <span className=" text-xl md:text-2xl text-textBlue">
            <FaFacebook />
          </span>
        </FacebookShareButton>
        <WhatsappShareButton url={link}>
          <span className=" text-xl md:text-2xl text-[#242]">
            <FaWhatsapp />
          </span>
        </WhatsappShareButton>
        <LinkedinShareButton url={link}>
          <span className=" text-xl md:text-2xl text-textBlue">
            <FaLinkedin />
          </span>
        </LinkedinShareButton>
        <TwitterShareButton url={link}>
          <span className=" text-xl md:text-2xl text-textBlue">
            <FaTwitter />
          </span>
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialMedia;
