// import TransactionHistory from "../TransactionHistory/TransactionHistory";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.tableTransaction}>
        <thead className={css.tableTitle}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
        </tbody>
      </table> );
};

export default TransactionHistory;