import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/list/RelatedVideoList';
import Loading from '../components/Loading';
import { fetchVideo } from '../rtk/features/video/videoSlice';

export default function Video() {
    const { loading, video, error } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    const { videoId } = useParams();
    const { id, link, title, tags, date, description } = video;

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    let content;
    if (loading) content = <Loading />;
    if (error !== '' && loading === false) content = <div className="col-span-12">{error}</div>;
    if (error === '' && loading === false && !video.id)
        content = <div className="col-span-12">No Video Avilable</div>;
    if (loading === false && error === '' && video.id)
        content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <VideoPlayer link={link} title={title} />

                    <VideoDescription title={title} date={date} description={description} />
                </div>

                <RelatedVideoList currentVideoId={id} tags={tags} />
            </div>
        );

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
        </section>
    );
}
