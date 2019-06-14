import React, {Component} from 'react';
import {ListInfo, ListItem, LoadMore} from '../style'
import {connect} from "react-redux";
import {actionCreators} from '../store';
import {Link} from "react-router-dom";

class List extends Component {
  render() {
    const {list, getMoreList, page} = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
              <ListItem >
                <img className='list-pic'
                     src={item.get('imgUrl')}
                     alt=''/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文章</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'currentPage'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page + 1))
    }
  }
};

export default connect(mapState, mapDispatch)(List);