import {fromJS} from "immutable";

const defaultState = fromJS({
  topicList: [{
   id: 1,
   title: '社会热点',
    imgUrl:'https://upload-images.jianshu.io/upload_images/7715567-7bdba0471728aba9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32'
  },{
      id: 2,
      title: '手绘',
      imgUrl:'https://upload-images.jianshu.io/upload_images/7715567-7bdba0471728aba9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}