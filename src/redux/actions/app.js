import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from '../types'

export const showLoader = () => ({
	type: SHOW_LOADER
})

export const hideLoader = () => ({
  type: HIDE_LOADER
})

export const showAlert = text => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export const hideAlert = () => ({
  type: HIDE_ALERT
})
