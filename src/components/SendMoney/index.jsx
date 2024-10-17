import "./SendMoney.css";
import profile from "../../assets/profile.jpg";
import receiver from "../../assets/receiver.jpg";
import ngflag from "../../assets/ng-flag.svg";
import usflag from "../../assets/us-flag.png";
import mastercard from "../../assets/mastercard.png";
import { Plus } from "lucide-react";

const SendMoney = () => {
  return (
    <div className="send-money">
      <h2 className="title">Send Money</h2>
      <div className="row balance">
        <div>
          <h1>$10,000</h1>
          <p>
            <span className="success">+2.03</span>($203)
          </p>
        </div>
        <button className="add-fund-btn">
          <img src={mastercard} className="icon" alt="" />
          Add Fund
        </button>
      </div>
      <div className="amount">
        <div className="row user">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <p className="muted">Enter the amount</p>
        </div>
        <div className="row price-input">
          <p className="currency">$</p>
          <input type="text" placeholder="0.00" />
          <div className="row">
            <div className="profile">
              <img src={ngflag} alt="" />
            </div>
            <div className="profile">
              <img src={usflag} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row receiver">
        <div className="profile">
          <img src={receiver} alt="" />
        </div>
        <h3 className="name">John Mack</h3>
        <div className="rounded-icon-btn">
          <Plus />
        </div>
      </div>
      <button className="btn btn-primary send-money-btn">Send Money</button>
    </div>
  );
};

export default SendMoney;
