import axios from 'axios'
const OK = 0
export function get(url) {
  return function(params) {
   return axios.get(url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      if(errno === OK) {
        return data
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}