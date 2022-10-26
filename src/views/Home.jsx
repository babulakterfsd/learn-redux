import VideoGrid from '../components/grid/VideoGrid';
import Pagination from '../components/Pagination';
import Tags from '../components/tags/Tags';

export default function Home() {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    );
}
