import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchUserInfo = userName => {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

const fetchItemInfo = id => {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

const fetchList = pageName => {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}
