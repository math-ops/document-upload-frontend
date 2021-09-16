import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 20px;
  background: #fff;
  background-color: #00368c;
  
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


export const Subtitle = styled.button`
  font-family: 'Roboto', sans-serif;
  text-align: right;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
  background: none;
  border: none;
  color: #fff;
  margin-top: -30px;
  margin-left: 900px;
  margin-bottom: 5px;
  display: flex;
  transition: 0.4s ease-out;
  &:hover{
    transform: translateX(-5px);  
  }
`;