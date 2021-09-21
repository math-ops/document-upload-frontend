import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 20px;
  background: #fff;
  background-color: #009add;
  
`;

export const Image = styled.img`
  padding: 0;
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  margin-top: -37px;
  margin-bottom: 5px;

`;


export const Logout = styled.a`
  font-family: 'Roboto', sans-serif;
  text-align: right;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
  background: none;
  border: none;
  color: #fff;
  margin-top: -25px;
  margin-left: 95%;
  margin-bottom: 5px;
  display: flex;
  transition: 0.4s ease-out;
  &:hover{
    transform: translateX(-5px);  
  }
`;

export const Home = styled.a`
  font-family: 'Roboto', sans-serif;
  text-align: right;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
  background: none;
  border: none;
  color: #fff;
  margin-top: -25px;
  margin-left: 85%;
  margin-bottom: 8px;
  display: flex;
  transition: 0.4s ease-out;
  &:hover{
    transform: translateX(-5px);  
  }
`;