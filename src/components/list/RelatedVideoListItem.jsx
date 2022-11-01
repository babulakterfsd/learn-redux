/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetTagsAndSearch, selectAuthor } from '../../rtk/features/filter/filterSlice';
import { selectPage } from '../../rtk/features/pagination/paginationSlice';

export default function RelatedVideoListItem({ video }) {
    const { id, title, author, thumbnail, duration, views, date } = video;

    const { currentPage } = useSelector((state) => state.pagination);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuthor = () => {
        dispatch(resetTagsAndSearch());
        dispatch(selectAuthor(author));

        if (currentPage !== 1) {
            dispatch(selectPage(1));
        }
    };

    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/videos/${id}`}>
                    <img src={thumbnail} className="object-cover" alt={title} />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {duration}
                </p>
            </div>

            <div clas="flex flex-col w-full">
                <Link to={`/videos/${id}`}>
                    <p className="text-slate-900 text-sm font-semibold">{title}</p>
                </Link>
                <span
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
                    onClick={() => navigate('/')}
                    onMouseDownCapture={() => handleAuthor()}
                >
                    {author}
                </span>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
}
