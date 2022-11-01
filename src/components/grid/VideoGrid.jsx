import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../rtk/features/videos/videosSlice';
import Loading from '../Loading';
import VideoGridItem from './VideoGridItem';

export default function VideGrid() {
    const { videos, loading, error } = useSelector((state) => state.videos);
    const { currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const { tags, searchKeyword } = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchVideos({ tags, searchKeyword, currentPage }));
    }, [dispatch, tags, searchKeyword, currentPage]);

    let content;
    if (loading) content = <Loading />;
    if (error !== '' && loading === false && videos?.length === 0)
        content = <div className="col-span-12">{error}</div>;
    if (error === '' && loading === false && videos?.length === 0)
        content = <div className="col-span-12">No Videos Avilable</div>;
    if (loading === false && error === '' && videos?.length > 0)
        content = videos?.map((video) => <VideoGridItem key={video.id} video={video} />);

    return (
        <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-screen">
                {content}
            </div>
        </section>
    );
}
