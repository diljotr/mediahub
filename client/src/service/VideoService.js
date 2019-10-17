import axios from 'axios';

const API_URL = 'http://localhost:8080';

class VideoService {

    retrieveVideoList() {
        return axios.get(`${API_URL}/api/videos`);
    }

    retrieveTopVideoList() {
        return axios.get(`${API_URL}/api/videos/search/findTopVideos`);
    }

}


export default new VideoService()