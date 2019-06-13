import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 56px auto;
`;

export const HomeLeft = styled.div`
  padding: 30px 0 0 15px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  height: 300px;
  margin-left: 25px;
  padding-top: 30px;
  padding-right: 15px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-right: 14px;
  margin-bottom: 14px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .img-topic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #bcbcbc;
  .list-pic{
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  width: 475px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => (props.imgUrl)});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 329px;
  line-height: 329px;
  text-align: center;
`;
