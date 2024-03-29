import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://www.linkedin.com/in/degsew-abebaw-23b3a1257/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="likedin" src="assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="likedin" src="assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://twitter.com/DegsewAbebaw"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="likedin" src="assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="likedin" src="assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
