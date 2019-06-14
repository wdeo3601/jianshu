import axios from "axios";
import {constants} from "./index";


function changeDetail(result) {
  return {
    type: constants.CHANGE_DETAIL,
    title: result.title,
    content: result.content
  };
}

export function getDetail(id) {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result));
    }).catch(()=>{

    })
  }
}
