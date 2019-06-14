import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  padding-top: 20px;
  margin: 100px auto;
  background: white;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  border-radius: 4px;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;

export const Button = styled.div`
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: white;
  margin: 10px auto;
  background: #3194d0;
  border-radius: 15px;
  text-align: center;
`;
