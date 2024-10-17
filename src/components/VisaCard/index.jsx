import React, { useRef, useEffect } from "react";
import "./VisaCard.css";
import world from "../../assets/world.svg";
import chip from "../../assets/chip.png";
import visa from "../../assets/visa.png";
import partern from "../../assets/partern.jpg";

const VisaCard = () => {
  const visaCardRef = useRef(null);

  useEffect(() => {
    const visaCard = visaCardRef.current;

    const handleCardClick = () => {
      const innerCard = visaCard.querySelector(".visa-card-inner");
      innerCard.classList.toggle("rotated");
    };

    visaCard.addEventListener("click", handleCardClick);

    return () => {
      visaCard.removeEventListener("click", handleCardClick);
    };
  }, []);

  return (
    <div className="visa-card" ref={visaCardRef}>
      <div className="visa-card-inner">
        <div className="front">
          <img src={world} className="map-img" alt="" />
          <div className="row">
            <img src={chip} className="icon" alt="" />
            <img src={visa} className="icon" alt="" />
          </div>
          <div className="row card-no">
            <p>1234</p>
            <p>5678</p>
            <p>9876</p>
            <p>5432</p>
          </div>
          <div className="row card-holder">
            <p>CARD HOLDER</p>
            <p>VALID TILL</p>
          </div>
          <div className="row name">
            <p>JOHN DOE</p>
            <p>04/29</p>
          </div>
        </div>
        <div className="back">
          <img src={world} className="map-img" alt="" />
          <div className="bar"></div>
          <div className="row card-cvv">
            <div>
              <img src={partern} alt="" />
            </div>
            <p>420</p>
          </div>
          <div className="row card-text">
            <p>
              JustPay's virtual card enables secure, instant payment,giving you
              access to funds and seamless financial management.
            </p>
          </div>
          <div className="row signature">
            <p>CUSTOMER SIGNATURE</p>
            <img src={visa} className="icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
