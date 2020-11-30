import React from "react";
import { SOCIAL_MEDIA } from "../../data/constants";
import "./footer.css";
import NavList from "../nav-list/nav-list";
import CurrentYear from "../../utils/get-year";
import ImageComp from "../Img/image-componet";
import FacebookIcon from "../../assets/images/Icons/Sorted Icons/png/facebook.png";
import TwitterIcon from "../../assets/images/Icons/Sorted Icons/png/twitter.png";
import InstagramIcon from "../../assets/images/Icons/Sorted Icons/png/instagram-2.png";

const Footer = () => {
  return (
    <div className="footer__container">
      {/* <hr /> */}
      <NavList className={"footer__item"} />
      <div className="footer__copywrite_container">
        <p>&copy; HackersGuild {CurrentYear()}</p>
      </div>
      <div className="footer__social">
        <a href={SOCIAL_MEDIA.facebook}>
          <ImageComp imgSrc={FacebookIcon} />
        </a>

        <a href={SOCIAL_MEDIA.twitter}>
          <ImageComp imgSrc={TwitterIcon} />
        </a>

        <a href={SOCIAL_MEDIA.instagram}>
          <ImageComp imgSrc={InstagramIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;