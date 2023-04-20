import axios from 'axios';

const API_KEY = '851d30eff2dc450ca53a76e2de8d0582';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}