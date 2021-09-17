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
    },
    postPhone: async phoneData => {
      const API_END = `${API_URL}/new-phone`

      try {
        const formData = new FormData()
        Object.entries(phoneData).forEach(phone => formData.append(phone[0], phone[1]))

        const response = await axios.post(API_END, formData)
        return response.data

      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default api