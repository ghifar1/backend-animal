import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://dinda.himti.id/api'
})

export default Api