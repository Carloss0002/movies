import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


export default api


//https://api.themoviedb.org/3/ base da Url
//https://api.themoviedb.org/3/movie/now_playing?api_key=03fd12db11fc225ed2549d84f1b1aa24&language=pt-br