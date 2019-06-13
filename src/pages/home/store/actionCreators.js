import axios from 'axios'
import * as constants from './constants'


const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export function getHomeInfo() {
  return function (dispatch) {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  };
}

const addHomeList = (list, page) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: list,
  currentPage: page
});

export function getMoreList(page) {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const list = res.data.data;
      const action = addHomeList(list, page);
      dispatch(action);
    });
  };
}


export function toggleTopShow(show) {
  return {
    type: constants.TOGGLE_SCROLL_SHOW,
    showScroll: show
  };
}

