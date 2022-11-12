import deleteImage from '../../assets/images/delete.svg';
import editImage from '../../assets/images/edit.svg';

export default function Transaction({ transaction }) {
    const { id, name, type, amount } = transaction || {};

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link" type="button">
                    <img alt="Edit" className="icon" src={editImage} />
                </button>
                <button className="link" type="button">
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
