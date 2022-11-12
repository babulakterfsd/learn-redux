import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../rtk/features/transaction/transactionSlice';
import Transaction from './Transaction';

export default function Transactions() {
    const { transactions, loading } = useSelector((state) => state.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    // decide what to render
    let content = null;
    if (loading) content = <p>Loading...</p>;

    if (!loading && transactions?.length > 0) {
        content = transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!loading && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
        </>
    );
}
