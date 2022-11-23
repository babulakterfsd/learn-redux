import { useGetVideosQuery } from '../../rtk/features/api/apiSlice';
import Error from '../ui/Error';
import VideoLoader from '../ui/loaders/VideoLoader';
import VideoCard from './VideoCard';

export default function Videos() {
    const { data: videos, isLoading, isError } = useGetVideosQuery();

    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error while fetching" />;
    }

    if (!isLoading && !isError && videos?.length === 0) {
        content = <Error message="No videos found!" />;
    }

    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <VideoCard key={video.id} video={video} />);
    }

    return content;
}
