import axios from '../../../utils/axios';

export const getVideos = async (tags, searchKeyword, currentPage) => {
    let queryString = '';

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
    }
    if (searchKeyword !== '') {
        queryString += `&q=${searchKeyword}`;
    }
    if (currentPage) {
        if (tags.length > 0 || searchKeyword !== '') {
            queryString += `&_page=${currentPage}&_limit=8`;
        } else {
            queryString += `_page=${currentPage}&_limit=8`;
        }
    }

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
};

export default getVideos;
