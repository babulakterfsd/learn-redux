/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    cancelModalEdit,
    changeTransaction,
    createTransaction,
    // eslint-disable-next-line prettier/prettier
    editInActive
} from '../rtk/features/transaction/transactionSlice';

export default function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.transaction);
    const { editing } = useSelector((state) => state.transaction) || {};

    const reset = () => {
        setName('');
        setType('');
        setAmount('');
    };

    // listen for edit mode active
    useEffect(() => {
        const { id } = editing || {};
        if (id) {
            setEditMode(true);
            setName(editing?.name);
            setType(editing?.type);
            setAmount(editing?.amount);
        } else {
            setEditMode(false);
            reset();
        }
    }, [editing]);

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(
            createTransaction({
                name,
                type,
                amount: Number(amount),
            })
        );
        reset();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            changeTransaction({
                id: editing?.id,
                data: {
                    name,
                    amount: Number(amount),
                    type,
                },
            })
        );
        setEditMode(false);
        reset();
        dispatch(editInActive());
        dispatch(cancelModalEdit());
    };

    const cancelEditMode = () => {
        reset();
        setEditMode(false);
        dispatch(editInActive());
        dispatch(cancelModalEdit());
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdate : handleCreate}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="enter title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            id="income"
                            name="type"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            id="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                        />
                        <label htmlFor="expense">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        required
                        placeholder="enter amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
                    />
                </div>

                <button disabled={isLoading} className="btn bg-green-900" type="submit">
                    {editMode ? 'Update Transaction' : 'Add Transaction'}
                </button>

                {!isLoading && isError && <p className="error">There was an error occured</p>}
            </form>

            {editMode && (
                <button type="button" className="btn cancel_edit" onClick={cancelEditMode}>
                    Cancel Edit
                </button>
            )}
        </div>
    );
}
