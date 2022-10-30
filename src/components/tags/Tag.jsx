/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import { removeTag, selectTag } from '../../rtk/features/filter/filterSlice';

export default function Tag({ tag }) {
    const { tags } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const isSelected = tags?.includes(tag);
    const tagStyle = isSelected
        ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
        : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

    const handleSelection = () => {
        if (!isSelected) {
            dispatch(selectTag(tag));
        } else {
            dispatch(removeTag(tag));
        }
    };

    return (
        <div className={tagStyle} onClick={() => handleSelection()}>
            {tag}
        </div>
    );
}
