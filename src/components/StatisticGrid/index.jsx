import {
  CircleDollarSign,
  Flag,
  GitBranchPlus,
  Pencil,
  Search,
  Star,
} from "lucide-react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import "./StatisticGrid.css";

const StatisticGrid = () => {
  return (
    <div className="statistic-grid">
      <div className="statistics">
        <h2 className="title">Statistics</h2>
        <div className="boxes">
          <div className="box">
            <div className="rounded-icon-btn">
              <GitBranchPlus className="icon danger" />
            </div>
            <div>
              <h4>357K</h4>
              <p className="muted">User Trust</p>
            </div>
          </div>
          <div className="box">
            <div className="rounded-icon-btn">
              <Flag className="icon primary" />
            </div>
            <div>
              <h4>20 Countries</h4>
              <p className="muted">Global Reach</p>
            </div>
          </div>
          <div className="box">
            <div className="rounded-icon-btn">
              <CircleDollarSign className="icon primary" />
            </div>
            <div>
              <h4>$1.3m</h4>
              <p className="muted">Transactions</p>
            </div>
          </div>
          <div className="box">
            <div className="rounded-icon-btn">
              <Star className="icon primary" />
            </div>
            <div>
              <h4>3k</h4>
              <p className="muted">Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-history">
        <div className="row contact-history-header">
          <h2 className="title">Contact History</h2>
          <div className="row">
            <div className="rounded-icon-btn">
              <Pencil className="icon" />
            </div>
            <div className="rounded-icon-btn">
              <Search className="icon" />
            </div>
          </div>
        </div>
        <p className="muted">25 new contacts added</p>
        <div className="profile-container">
          <div className="row user">
            <div className="profile">
              <img src={user1} alt="" />
            </div>
            <div>
              <h3>Jenny</h3>
              <p className="muted">$25.9</p>
            </div>
          </div>
          <div className="row user">
            <div className="profile">
              <img src={user2} alt="" />
            </div>
            <div>
              <h3>James</h3>
              <p className="muted">$250</p>
            </div>
          </div>
          <div className="row user">
            <div className="profile">
              <img src={user3} alt="" />
            </div>
            <div>
              <h3>Lucas</h3>
              <p className="muted">$75.25</p>
            </div>
          </div>
          <div className="row user">
            <div className="profile">
              <img src={user4} alt="" />
            </div>
            <div>
              <h3>Jack</h3>
              <p className="muted">$45.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticGrid;
