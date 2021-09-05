import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://backend-donasi.herokuapp.com/api'
})

export default Api