import axios from 'axios'

const api = (API_URL = 'http://localhost:3001') => {
  return {
    getPhones: async () => {
      const API_END = `${API_URL}/phones`

      try {
        const response = await axios.get(API_END)
        return response.data
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export default api