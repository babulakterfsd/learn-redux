import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../rtk/features/transaction/transactionSlice';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.transactions);

    const transactionDetails = { name, type, amount: +amount };

    const handleAddTransaction = (e) => {
        e.preventDefault();
        dispatch(createTransaction(transactionDetails));
        setType('');
        setAmount(0);
        setName('');
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={(e) => handleAddTransaction(e)}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            required
                            value="income"
                            name="type"
                            checked={type === 'income'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="expense"
                            checked={type === 'expense'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter Amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={loading} type="submit" className="btn bg-indigo-600 text-white">
                    Add Transaction
                </button>
            </form>

            {error !== '' && (
                <p className="my-2 text-red-600 bg-red-300 p-1 text-center">Something is wrong</p>
            )}

            <button className="btn cancel_edit" type="button">
                Cancel Edit
            </button>
        </div>
    );
}
