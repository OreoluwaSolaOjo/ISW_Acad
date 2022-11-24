import axios from "axios";

export const BASE_URL = 'http://localhost:7051';

export const ENDPOINTS = {
    getAnswers: 'QuestionsBank/GetAnswers'
}

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + '/' + 'api/' + ENDPOINTS + '/'
    return{
        // fetch: () => axios.get(url + id),
        // fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        // put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        // delete: id => axios.delete(url + id),
    }
}