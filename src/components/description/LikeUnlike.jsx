/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
import { useDispatch } from 'react-redux';
import likeImage from '../../assets/images/like.svg';
import unlikeImage from '../../assets/images/unlike.svg';
import { updateVideoReaction } from '../../rtk/features/video/videoSlice';

export default function LikeUnlike({ likes, unlikes, videoID }) {
    const dispatch = useDispatch();
    const reactionHandler = ({ id, reaction }) => {
        dispatch(updateVideoReaction({ id, reaction }));
    };
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                    <img
                        className="w-5 block"
                        src={likeImage}
                        alt="Like"
                        onClick={() => reactionHandler({ id: videoID, reaction: 'like' })}
                    />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                    <img
                        className="w-5 block"
                        src={unlikeImage}
                        alt="Unlike"
                        onClick={() => reactionHandler({ id: videoID, reaction: 'unlike' })}
                    />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
            </div>
        </div>
    );
}
