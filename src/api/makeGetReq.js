import axios from 'axios'

export default function makeGetReq (url, args) {
    return axios.get(url, {
        withCredentials: true,
        params: args
    })
}