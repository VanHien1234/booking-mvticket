import Axios from 'axios';
import { BASE_URL } from 'settingAPI/apiConfig';

/* const callApi = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
  });
};

export default callApi; */

export class baseService {
  //put json về phía backend
  put = (url,model) => {
      return  Axios({
          url:`${BASE_URL}/${url}`,
          method:'PUT',
          data:model,
          /* headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} */ //JWT
      }) 
  }

  post = (url,model) => {
      return Axios({
          url:`${BASE_URL}/${url}`,
          method:'POST',
          data:model,
          /* headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}  *///JWT
      }) 
  }


  get = (url) => {
      return Axios({
          url:`${BASE_URL}/${url}`,
          method:'GET',
          /* headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} */ //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      })
  }

  delete = (url) => {
      return Axios({
          url:`${BASE_URL}/${url}`,
          method:'DELETE',
          /* headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} */ //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      })
  }
}