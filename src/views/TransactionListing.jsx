/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cross from '../assets/images/cross.jpg';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Transaction from '../components/transaction/Transaction';
import {
    clearFilter,
    clearSearch,
    clearType,
    setSearch,
    // eslint-disable-next-line prettier/prettier
    setType
} from '../rtk/features/filter/filterSlice';
import { fetchTransactions } from '../rtk/features/transaction/transactionSlice';

function TransactionListing() {
    const [searchText, setSearchText] = useState('');
    const [tType, setTtype] = useState('');
    const dispatch = useDispatch();
    const {
        transaction: { transactions, isLoading, isError, modalEdit, totalCount },
        filter: {
            search,
            type,
            pagination: { currentPage, limit },
        },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchTransactions({ currentPage, limit, search, type }));
    }, [currentPage, limit, search, type, dispatch]);

    // search handler
    const searchHandler = (e) => {
        e.preventDefault();
        if (searchText) {
            dispatch(setSearch(searchText));
            return setSearchText('');
        }
        dispatch(clearSearch());
    };

    // type change handler
    const typeChangeHandler = (transactionType) => {
        setTtype(transactionType);
        dispatch(setType(transactionType));
    };
    // cancel type handler
    const handleClearType = () => {
        dispatch(clearType());
        setTtype('');
    };
    const handleClearFilter = () => {
        dispatch(clearFilter());
        setTtype('');
    };

    // decide what to render
    let content = null;
    if (isLoading) content = <p className="p-28">Loading...</p>;

    if (!isLoading && isError) content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {
        content = transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} modal />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <Layout>
            <h2 className="text-center text-xl underline text-indigo-400 mb-6">All Transactions</h2>
            {modalEdit && (
                <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
                    <Form />
                </div>
            )}
            <div className="listing-header flex justify-between items-center w-full">
                <div className="types flex justify-between items-center gap-x-12">
                    <div className="input-group flex gap-x-2">
                        <input
                            type="radio"
                            name="type"
                            id="income"
                            checked={tType === 'income'}
                            onChange={() => typeChangeHandler('income')}
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div className="input-group flex gap-x-2">
                        <input
                            type="radio"
                            name="type"
                            id="expense"
                            checked={tType === 'expense'}
                            onChange={() => typeChangeHandler('expense')}
                        />
                        <label htmlFor="expense">Expense</label>
                    </div>
                </div>
                <form className="search" onSubmit={searchHandler}>
                    <input
                        type="text"
                        placeholder="search transaction"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
                    />
                </form>
            </div>

            {(search || type) && (
                <div className="flex items-center justify-between w-full my-6">
                    <div className="flex items-center space-x-4">
                        {type && (
                            <button
                                type="button"
                                className="px-4 py-2 rounded-full bg-blue-400 text-white flex items-center"
                                onClick={handleClearType}
                            >
                                {type}
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="w-4 h-3 rounded-full ml-2"
                                />
                            </button>
                        )}{' '}
                        {search && (
                            <button
                                type="button"
                                className="px-4 py-2 rounded-full bg-blue-400 text-white flex items-center"
                                onClick={() => dispatch(clearSearch())}
                            >
                                {`"${search}"`}{' '}
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="w-4 h-3 rounded-full ml-2"
                                />
                            </button>
                        )}
                    </div>
                    <div>
                        <button
                            type="button"
                            className="px-4 py-2 rounded-full bg-red-400 text-white flex items-center"
                            onClick={handleClearFilter}
                        >
                            clear
                            <img src={cross} alt="cross" className="w-4 h-3 rounded-full ml-2" />
                        </button>
                    </div>
                </div>
            )}
            <div className="container">
                <ul className="listing-list">{content}</ul>
            </div>
            <Pagination totalCount={totalCount} />
        </Layout>
    );
}
export default TransactionListing;
