import { useDispatch } from 'react-redux';
import deleteImage from '../../assets/images/delete.svg';
import editImage from '../../assets/images/edit.svg';
import { editActive, removeTransaction } from '../../rtk/features/transaction/transactionSlice';
import numberWithCommas from '../../utils/thousandSeperator';

export default function Transaction({ transaction }) {
    const { id, name, type, amount } = transaction || {};
    const dispatch = useDispatch();

    const storeEditingTransaction = () => {
        dispatch(editActive(transaction));
    };

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {numberWithCommas(amount)}</p>
                <button className="link" type="button" onClick={storeEditingTransaction}>
                    <img alt="Edit" className="icon" src={editImage} />
                </button>
                <button
                    className="link"
                    type="button"
                    onClick={() => dispatch(removeTransaction(id))}
                >
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
