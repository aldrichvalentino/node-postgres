// Actions that are related to User
export const type = {
  CREATE_USER: 'CREATE_USER',
  EDIT_USER: 'EDIT_USER',
  GET_USER: 'GET_USER',
  RECEIVE_USER: 'RECEIVE_USER'
}

export const getUser = () => ({
  type: type.GET_USER,
})

export const receiveUser = (payload) => ({
  type: type.RECEIVE_USER,
  payload
})

export const addUser = (name, email, password) => ({
  type: type.CREATE_USER,
  name,
  email,
  password
})

export const editUser = (index, name, password) => ({
  type: type.EDIT_USER,
  index,
  name,
  password
})