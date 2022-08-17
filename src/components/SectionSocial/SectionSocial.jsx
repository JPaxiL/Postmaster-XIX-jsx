import React from "react";

import iconFacebook from "../../assets/img/icons/icon-facebook.svg";
import iconTwitter from "../../assets/img/icons/icon-twitter.svg";
import iconLinkedin from "../../assets/img/icons/icon-linkedin.svg";
import iconInstagram from "../../assets/img/icons/icon-instagram.svg";

import "./SectionSocial.css"


const SectionSocial = () => {
  return (
    <section class="section-sociales">
      <a
        class="icon"
        target="_blank"
        href="https://www.facebook.com/Ingenier%C3%ADa-en-Inform%C3%A1tica-y-Sistemas-UNJBG-1933587416925656"
      >
        <img
          class="icon__img"
          src={iconFacebook}
          alt="icon-facebook"
        />
      </a>
      <a class="icon" target="_blank" href="https://twitter.com/">
        <img
          class="icon__img"
          src={iconTwitter}
          alt="iconTwitter"
        />
      </a>
      <a class="icon" target="_blank" href="https://www.linkedin.com/feed/">
        <img
          class="icon__img"
          src={iconLinkedin}
          alt="icon-linkedin"
        />
      </a>
      <a class="icon" target="_blank" href="https://www.instagram.com/">
        <img
          class="icon__img"
          src={iconInstagram}
          alt="icon-instagram"
        />
      </a>
    </section>
  );
};

export default SectionSocial;
