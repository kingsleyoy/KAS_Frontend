import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const SocialMedia = ({ link }) => {
  return (
    <div>
      <h2>share link:</h2>
      <FacebookShareButton url={link}>Facebook</FacebookShareButton>
      <WhatsappShareButton url={link}>Whatsapp</WhatsappShareButton>
      <LinkedinShareButton url={link}>LinkedIn</LinkedinShareButton>
      <TwitterShareButton url={link}>Twitter</TwitterShareButton>
    </div>
  );
};

export default SocialMedia;
