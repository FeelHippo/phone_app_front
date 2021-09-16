import { types } from './types'
import api from '../api'

const { getPhones } = api()

export const getAllPhones = () => {
  return async dispatch => {
    try {
      const data = await getPhones()
      dispatch(storePhones(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const toggleModal = value => ({
  type: types.TOGGLE_MODAL,
  payload: value,
})

const storePhones = data => ({
  type: types.FETCH_PHONES,
  payload: data,
})