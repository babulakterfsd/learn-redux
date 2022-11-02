/* eslint-disable consistent-return */
import axios from '../../../utils/axios';

export const getVideo = async (id) => {
    const response = await axios.get(`videos/${id}`);
    return response.data;
};

export default getVideo;

export const updateReaction = async ({ id, reaction }) => {
    const { data } = await axios.get(`/videos/${id}`);
    if (data) {
        const updatedReaction =
            reaction === 'like'
                ? {
                      likes: data.likes + 1,
                  }
                : {
                      unlikes: data.unlikes + 1,
                  };

        const response = await axios.patch(`/videos/${id}`, updatedReaction);
        return response.data;
    }
};
