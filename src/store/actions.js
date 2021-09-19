import { types } from './types'
import api from '../api'

const { getPhones, getPhone, getPhoneImage, postPhone, deletePhoneById } = api()

export const getAllPhones = () => {
  return async dispatch => {
    try {
      const data = await getPhones()
      const phones = await Promise.all(data.map(async phone => ({ ...phone, file: await getPhoneImage(phone.imageFileName) })))
      dispatch(storePhones(phones))
    } catch (err) {
      console.error(err)
    }
  }
}

const storePhones = data => ({
  type: types.FETCH_PHONES,
  payload: data,
})

export const getPhoneById = id => {
  return async dispatch => {
    try {
      const data = await getPhone(id)
      const file = await getPhoneImage(data?.imageFileName)
      dispatch(storePhone({ ...data, file }))
    } catch (err) {
      console.error(err)
    }
  }
}

export const deletePhone = id => {
  return async dispatch => {
    try {
      await deletePhoneById(id)
      dispatch(getAllPhones())
    } catch (err) {
      console.error(err)
    }
  }
}

const storePhone = data => ({
  type: types.FETCH_PHONE,
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