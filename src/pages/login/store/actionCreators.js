import Axios from "axios";
import {constants} from "./index";

export function logout() {
  return {
    type: constants.LOGOUT,
    login: false
  };
}


export function login(account, password) {
  return (dispatch)=>{
    Axios.get('api/login.json?account='+account+'&password='+password)
      .then((res)=>{
        const result = res.data.data;
        if (result){
          dispatch({
            type: constants.CHANGE_LOGIN,
            login: true
          })
        } else {
          alert('登录失败')
        }
      })
  };
}
