import { useSelector } from 'react-redux';
import numberWithCommas from '../utils/thousandSeperator';

export default function Balance() {
    const { transactions } = useSelector((state) => state.transactions);

    const incomes = transactions.filter((t) => t.type === 'income');
    const totalIncome = incomes.reduce((prev, cuurent) => prev + cuurent.amount, 0);
    const expenses = transactions.filter((t) => t.type === 'expense');
    const totalExpense = expenses.reduce((prev, cuurent) => prev + cuurent.amount, 0);
    const currentBalance = totalIncome - totalExpense;

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>$</span>
                <span>{` ${numberWithCommas(currentBalance)}`}</span>
            </h3>
        </div>
    );
}
