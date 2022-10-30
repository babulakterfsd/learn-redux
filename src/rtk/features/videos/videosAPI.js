import axios from '../../../utils/axios';

export const getVideos = async (tags, searchKeyword) => {
    let queryString = '';

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
    }
    if (searchKeyword !== '') {
        queryString += `&q=${searchKeyword}`;
    }

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
};

export default getVideos;
