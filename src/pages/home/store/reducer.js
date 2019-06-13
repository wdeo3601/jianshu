import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  currentPage: 1,
  showScroll: false
});

function changeHomeData(state, action) {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

function addArticleList(state, action) {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    currentPage: fromJS(action.currentPage)
  });
}

function toggleScrollShow(state, action) {
  return state.merge({
    showScroll: fromJS(action.showScroll)
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_SHOW:
      return toggleScrollShow(state, action);
    default:
      return state;
  }
}