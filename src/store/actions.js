import { types } from './types'
import api from '../api'

const { getPhones, postPhone } = api()

export const getAllPhones = () => {
  return async dispatch => {
    try {
      const data = await getPhones()
      console.log(data);
      dispatch(storePhones(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const storePhones = data => ({
  type: types.FETCH_PHONES,
  payload: data,
})

export const createNewPhone = phoneData => {
  return async (dispatch, getState) => {
    try {
      let response = await postPhone(phoneData)
      if (response.success) {
        const { isModalOpen } = getState()
        dispatch(getAllPhones())
        dispatch(toggleModal(!isModalOpen))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export const toggleModal = value => ({
  type: types.TOGGLE_MODAL,
  payload: value,
})