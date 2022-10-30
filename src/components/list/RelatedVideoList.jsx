import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../rtk/features/relatedVideos/relatedVideosSlice';
import Loading from '../Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideoList({ currentVideoId, tags }) {
    const { videos, loading, error } = useSelector((state) => state.relatedVideos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, currentVideoId }));
    }, [dispatch, currentVideoId, tags]);

    let content;
    if (loading) content = <Loading />;
    if (error !== '' && loading === false && videos?.length === 0)
        content = <div className="col-span-12">{error}</div>;
    if (error === '' && loading === false && videos?.length === 0)
        content = <div className="col-span-12">No Videos Avilable</div>;
    if (loading === false && error === '' && videos?.length > 0)
        content = videos?.map((video) => <RelatedVideoListItem key={video.id} video={video} />);

    return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
