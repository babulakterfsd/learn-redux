import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearch } from '../../rtk/features/filter/filterSlice';

export default function Search() {
    const { searchKeyword } = useSelector((state) => state.filter);
    const [input, setInput] = useState(searchKeyword);
    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(handleSearch(input));
    };

    return (
        <form onSubmit={(e) => submitSearch(e)}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
