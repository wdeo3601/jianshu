import * as constants from './constants'
import {fromJS} from "immutable";
import axios from 'axios'

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});


export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export function getList() {
  return function (dispatch) {
    axios.get('api/headerList.json').then((res) => {
      const data = res.data;
      console.log(data);
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  };
}

export function mouseEnter() {
  return {
    type: constants.MOUSE_ENTER,
    mouseIn: true
  };
}

export function mouseLeave() {
  return {
    type: constants.MOUSE_LEAVE,
    mouseIn: false
  };
}

export function changePage(page) {
  return {
    type: constants.CHANGE_PAGE,
    page
  };
}