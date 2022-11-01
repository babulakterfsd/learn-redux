/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../rtk/features/pagination/paginationSlice';

export default function Pagination() {
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const { currentPage } = useSelector((state) => state.pagination);

    const dispatch = useDispatch();

    const pagesArray = [];
    for (let i = 0; i < totalPage; i++) {
        pagesArray.push(i + 1);
    }

    useEffect(() => {
        dispatch(selectPage(pageNumber));
    }, [dispatch, pageNumber]);

    useEffect(() => {
        fetch('http://localhost:9000/videos')
            .then((res) => res.json())
            .then((data) => {
                setTotalPage(Math.ceil(data?.length / 8));
            });
    }, []);

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {pagesArray.map((_, index) => (
                    <div
                        key={index}
                        className={
                            currentPage !== pagesArray[index]
                                ? 'text-blue-600 px-4 py-1 rounded-full cursor-pointer'
                                : ' bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
                        }
                        onClick={() => setPageNumber(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </section>
    );
}
