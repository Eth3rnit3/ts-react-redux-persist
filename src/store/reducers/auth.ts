import { DefaultActionParams } from './interfaces'
import { LOGIN, LOGOUT } from '../types/auth'
const initialState = {
  token: '',
  isConnected: false
}

export default (state = initialState, action: DefaultActionParams) => {
  switch (action.type) {

  case LOGIN:
    return { ...state, ...action.payload, isConnected: true }

  case LOGOUT:
    return { ...initialState }

  default:
    return state
  }
}
