import React from "react";
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram
} from "react-icons/gr";

const SocialShare = [
  { Social: <GrInstagram />, link: "https://www.instagram.com/themyshkin/" },
  { Social: <GrLinkedinOption />, link: "https://www.linkedin.com/in/amanda-edling/" },
  { Social: <GrGithub />, link: "https://github.com/themyshkin" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
