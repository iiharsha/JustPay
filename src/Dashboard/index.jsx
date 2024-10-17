import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import VisaCard from "../components/VisaCard";
import SendMoney from "../components/SendMoney";
import QuickTransfer from "../components/QuickTransfer";
import CashFlow from "../components/CashFlow";
import StatisticsGrid from "../components/StatisticGrid";
import Transactions from "../components/Transactions";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} />
      <main>
        <Navbar onMenuClink={() => setOpen(!open)} />
        <section className="container">
          <div className="column">
            <VisaCard />
            <SendMoney />
            <QuickTransfer />
          </div>
          <div className="column">
            <CashFlow />
            <StatisticsGrid />
            <Transactions/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
