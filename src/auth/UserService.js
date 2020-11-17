import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {

    all = {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {
            // eslint-disable-next-line no-undef
            headers: all
        });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', {
            // eslint-disable-next-line no-undef
            headers: all
        });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', {
            // eslint-disable-next-line no-undef
            headers: all
        });
    }
}

export default new UserService();