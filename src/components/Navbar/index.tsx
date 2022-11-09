import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/Navbar/logo.png";

export default function Navbar() {
  return (
    <div className={style.mainContainer}>
      <div className={style.smallNavbar}>
        <a href="#" className={style.button}>
          Help
        </a>
        <div className={style.contentSpacer}>
          <a href="#" className={style.button}>
            Location
          </a>
          <a href="#" className={style.button}>
            Language
          </a>
        </div>
      </div>
      <div className={style.bigNavbar}>
        <img className={style.logo} src={logo} alt="Image" />
        <div className={style.buttonWrapper}>
          <a href="#" className={style.button}>
            NEW
          </a>
          <a href="#" className={style.button}>
            WOMAN
          </a>
          <a href="#" className={style.button}>
            MAN
          </a>
          <a href="#" className={style.button}>
            ACCESSORIES
          </a>
          <a href="#" className={style.button}>
            SALE
          </a>
        </div>
        <div className={style.signInWrapper}>
          <div className={style.notify}>
            <span>0</span>
          </div>
          <a href="#" className={style.signInButton}>
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
