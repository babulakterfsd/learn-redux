import axios from '../../../utils/axios';

export const getRelatedVideos = async (tags, id) => {
    const limit = 5;
    let queryString = '';

    if (tags?.length > 0) {
        queryString = tags
            .map((tag) => `tags_like=${tag}`)
            .join('&')
            .concat(`&id_ne=${id}&limit=${limit}`);
    } else {
        queryString = `id_ne=${id}&limit=${limit}`;
    }

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
};

export default getRelatedVideos;
