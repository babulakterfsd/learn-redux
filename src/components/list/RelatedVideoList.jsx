import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../rtk/features/relatedVideos/relatedVideosSlice';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideoList({ currentVideoId, tags }) {
    const { videos } = useSelector((state) => state.relatedVideos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, currentVideoId }));
    }, [dispatch, currentVideoId, tags]);

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {videos?.map((video) => (
                <RelatedVideoListItem key={video.id} video={video} />
            ))}
        </div>
    );
}
