import apiUrl from '../apiConfig'
import axios from 'axios'

export const purchaseIndex = user => {
  return axios({
    url: apiUrl + '/purchases',
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const purchaseCreate = (purchase, user) => {
  return axios({
    url: apiUrl + '/purchases',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    },
    // send the purchase object as our data for creating a purchase
    data: { purchase }
  })
}
// get a single purchase
export const purchaseShow = (id, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const purchaseDelete = (id, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'DELETE',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// export const purchaseUpdate = (id, purchase, user) => {
//   return axios({
//     url: apiUrl + '/purchases/' + id,
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Bearer ${user.token}`
//     },
//     data: { purchase }
//   })
// }
