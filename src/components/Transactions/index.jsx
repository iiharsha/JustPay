import "./Transactions.css";
import profile from "../../assets/profile.jpg";
import paystack from "../../assets/paystack.png";
import paypal from "../../assets/paypal.png";
import flutterwave from "../../assets/flutterwave.jpg";

const transactions = [
    {
        status : 1,
        name : "Rohith Sharma",
        image : profile,
        email : "rohith@gmail.com",
        date : new Date().toLocaleDateString(),
        amount : "$238",
    },
    {
        status : 2,
        name : "Micheal Jackson",
        image : paystack,
        email : "mjackson@gmail.com",
        date : new Date().toLocaleDateString(),
        amount : "$2500",
    },
    {
        status : 1,
        name : "Leonardo Vinci",
        image : paypal,
        email : "leovinci@gmail.com",
        date : new Date().toLocaleDateString(),
        amount : "$420",
    },
    {
        status : 0,
        name : "Aegon Targaryen",
        image : flutterwave,
        email : "aegon1@gmail.com",
        date : new Date().toLocaleDateString(),
        amount : "$10,000",
    },
]

const Transactions = () => {
  const shortenTextFormatter = (text, maxLength) => text.length > maxLength ? "..." +
  text.slice(-maxLength): text;


  return (
    <div className="transactions">
        <h2 className="title">Recent Transactions</h2>
        <table>
            <tbody>
                {transactions.map((data, index) => {
                    let status = data.status === 1 ? "Success" : data.status === 0 ? "Failed" : "Processing";
                    return (
                        <tr key = {index}>
                            <td className="minimize">
                                <div className="profile">
                                    <img src={data.image} alt="" />
                                </div>
                            </td>
                            <td 
                            className="minimize"
                            title={data.name}>
                                {data.name}
                            </td>
                            <td className="minimize">{data.date}</td>
                            <td title={data.email}>{shortenTextFormatter(data.email, 11)}
                            </td>
                            <td title={data.amount}>{data.amount}</td>
                            <td>
                                <div className={status}>
                                    {status}
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Transactions;