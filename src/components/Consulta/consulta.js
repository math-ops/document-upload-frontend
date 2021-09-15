import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;

`;

export const Form = styled.form`
  position: absolute;
  width: 95%;
  margin-top: 20px;
  margin-left: 30px;
  border: 1px solid #000000;
`;

export const Label = styled.label`
  text-align:center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  position: absolute;

`;

export const Input = styled.input`
  display: block;
  width: 30%;
  padding: 15px;
  border: none;
  outline: none;
  background: none;
  background-color: #eee;
  border-radius: 8px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
`;

export const Button = styled.button`
  position: absolute;
  cursor: pointer;
  padding: 20px;
  border: none;
  background: #00d268;

  &:hover{
    background: #fff;
    color: #006432;
    border: 1px solid #006432;
    transition: 0.4s ease-out;
  }
`;