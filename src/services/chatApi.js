// services/chatApi.js
import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/chat'

export const sendMessageApi = (data) => {
  return axios.post(`${BASE_URL}/send`, data)
}