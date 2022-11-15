import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createTransaction,
    editInactive,
    // eslint-disable-next-line prettier/prettier
    editTransaction
} from '../rtk/features/transaction/transactionSlice';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.transactions);
    const { editing } = useSelector((state) => state.transactions);

    const transactionDetails = { name, type, amount: +amount };

    const resetForm = () => {
        setType('');
        setAmount(0);
        setName('');
    };

    useEffect(() => {
        if (editing?.id) {
            setEditMode(true);
            setName(editing?.name);
            setType(editing?.type);
            setAmount(editing?.amount);
        } else {
            setEditMode(false);
        }
    }, [editing]);

    const handleAddTransaction = (e) => {
        e.preventDefault();
        dispatch(createTransaction(transactionDetails));
        resetForm();
    };

    const handleUpdateTransaction = (e) => {
        e.preventDefault();
        dispatch(
            editTransaction({
                id: editing?.id,
                data: {
                    name,
                    type,
                    amount,
                },
            })
        );
        setEditMode(false);
        resetForm();
    };

    const handleCancelEdit = () => {
        dispatch(editInactive());
        resetForm();
        setEditMode(false);
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdateTransaction : handleAddTransaction}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
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
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={loading} type="submit" className="btn bg-indigo-600 text-white">
                    {editMode ? ' Update Transaction' : 'Add Transaction'}
                </button>
            </form>

            {error !== '' && (
                <p className="my-2 text-red-600 bg-red-300 p-1 text-center">Something is wrong</p>
            )}

            {editMode && (
                <button className="btn cancel_edit" type="button" onClick={handleCancelEdit}>
                    Cancel Edit
                </button>
            )}
        </div>
    );
}
