import axios from '../../../utils/axios';

export const getVideos = async (tags, searchKeyword, currentPage, author) => {
    let queryString = '';

    if (author) {
        queryString += `author_like=${author}`;
    }

    if (tags?.length > 0) {
        if (author) {
            queryString += tags.map((tag) => `&tags_like=${tag}`).join('&');
        } else {
            queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
        }
    }
    if (searchKeyword !== '') {
        queryString += `&q=${searchKeyword}`;
    }
    if (currentPage) {
        if (tags.length > 0 || searchKeyword !== '' || author) {
            queryString += `&_page=${currentPage}&_limit=8`;
        } else {
            queryString += `_page=${currentPage}&_limit=8`;
        }
    }

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
};

export default getVideos;
