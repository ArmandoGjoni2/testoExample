import React from "react";
import style from "./style.module.scss";
import product from "../../assets/Product/product.png";
import Checkout from "../../components/Checkout/index.tsx";
export default function Product() {
  return (
    <div className={style.mainContainer}>
      <div className={style.productInfo}>
        <div className={style.productImageContainer}>
          <h1 className={style.productTitle}>
            testo 175 T1 - Temperature data logger
          </h1>
          <img src={product} alt="Image" className={style.productImage} />
        </div>
        <div className={style.moreInfoWrapper}>
          <p className={style.productInfo}>
            The testo 175 T1 temperature data logger is ideal for monitoring
            storage temperatures and long-term monitoring. It is certified for
            use in food environments and measures and logs temperatures
            constantly and reliably.
          </p>
          <div className={style.CheckoutContainer}>
            {" "}
            <Checkout />
          </div>
        </div>
      </div>
      <div className={style.moreInfos}>
        <div className={style.title}>Product Details</div>
        <div className={style.devider} />
        <p className={style.content}>
          The testo 175 T1 data logger has a built-in temperature sensor and is
          ideal for monitoring and logging the temperature in cool and cold
          rooms as well as in storage facilities.
        </p>
        <p className={style.boldContent}>
          State-of-the-art technology. High level of data security
        </p>
        <p className={style.content}>
          The logger`s display provides you with a wide range of valuable
          information including current measurement values, threshold values,
          points where these thresholds have been exceeded, min/max values and
          remaining battery power. And because all these values can be read off
          directly from the display, there is no need for you to boot up your
          PC. In addition to this nice little detail, the logger also has a
          super size memory, which can save up to 1 million measurements, and an
          exceptionally long battery life of up to 3 years. This gives you the
          freedom to read out the logger data at longer intervals, even when
          measuring cycles are shorter. The triple AAA batteries included in
          delivery can be replaced by the user.
        </p>
        <p className={style.boldContent}>
          Programming and analyzing your data logger
        </p>
        <p className={style.content}>
          Choose one of three software versions to program or read out your
          logger or to analyze the measuring data you have obtained on your PC:
          <ul>
            <li>
              Software ComSoft Basic - available for free downloading - allows
              you to program your logger and analyze the data quickly and easily
            </li>
            <li>
              Software ComSoft Professional - optional - provides you with
              additional possibilities and a more detailed analysis of the
              temperature values
            </li>
            <li>
              Software ComSoft CFR 21 Part 11 - optional - ideal for the special
              demands of the pharmaceutical sector in compliance with 21 CFR
              Part 11
            </li>
          </ul>
        </p>
        <p className={style.boldContent}>
          Checked and certified for use in the food sector
          <ul className={style.normalFont}>
            <li>Tested according to DIN EN 12830</li>
            <li>HACCP compliant and HACCP International certified</li>
            <li>
              IP65 protecti con: the temperature data logger can remain in the
              storage or vehicle cargo area during cleaning
            </li>
          </ul>
        </p>
        <div className={style.spacer} />
        <div className={style.title}>Delivery Scope</div>
        <div className={style.devider} />
        <p className={style.content}>
          testo 175 T1 data logger with internal sensor (NTC), wall mount, lock,
          batteries, calibration protocol.
        </p>
        <p className={style.content}>
          PLEASE NOTE: You will need a USB cable (not included) which you can
          order to program your data logger. The data can be transferred to your
          PC either via USB cable or SD card which you can also order.
        </p>
      </div>
    </div>
  );
}
