import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllFilters } from '../../rtk/features/filter/filterSlice';
import { fetchTags } from '../../rtk/features/tags/tagsSlice';
import Tag from './Tag';

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const { currentPage } = useSelector((state) => state.pagination);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return tags?.length > 0 && currentPage === 1 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag.title} />
                ))}
                <button
                    type="button"
                    className="text-red-600 bg-red-300 rounded-full py-1 px-2 font-semibold text-xs ml-auto"
                    onClick={() => dispatch(resetAllFilters())}
                >
                    Reset All Filters
                </button>
            </div>
        </section>
    ) : null;
}
