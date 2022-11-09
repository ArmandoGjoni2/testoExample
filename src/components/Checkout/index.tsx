import React from "react";
import style from "./style.module.scss";
import cart from "../../assets/Icons/cart.svg";
import mail from "../../assets/Icons/mail.svg";
import phone from "../../assets/Icons/phone.svg";

export default function Checkout() {
  return (
    <div className={style.mainContainer}>
      <p className={style.price}>€ 285.00</p>
      <div className={style.availableContainer}>
        <div className={style.greenIcon} />
        <p className={style.available}>Available</p>
      </div>
      <div className={style.buttonContainer}>
        <img src={cart} alt="" className={style.cart} />
        <p className={style.addToCart}>Add to cart</p>
      </div>
      <p className={style.pricesAndShipping}>Prices plus shipping costs</p>
      <p className={style.deliveryTime}>Delivery time: 3 – 5 working days</p>
      <div className={style.iconAndTextWrapper}>
        <img src={mail} alt="" className={style.icon} />
        <p className={style.info}>Inquiry</p>
      </div>
      <div className={style.iconAndTextWrapper}>
        <img src={phone} alt="" className={style.icon} />
        <p className={style.infoNumber}>07653 8349 659-7</p>
      </div>
    </div>
  );
}
