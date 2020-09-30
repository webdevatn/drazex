import {
  TOKEN_REQUEST,
  GET_TOKEN_REQUEST

} from "./TypeConstants"

export const tokenRequestAction = (token) => {
  return {
      type: TOKEN_REQUEST,
      token
  }
}

export const getTokenRequest = () => {
  return {
      type: GET_TOKEN_REQUEST
  }
}