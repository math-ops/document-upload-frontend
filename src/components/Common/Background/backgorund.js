import styled from 'styled-components'

export const Slider = styled.div`
    width: 100%;
    height: 80%;
    overflow: hidden;
`;

export const Slides = styled.div`
    width: 500%;
    height: 100%;
    display: flex;
    overflow: hidden;
`;

export const Slide = styled.div`
    width: 20%;
    transition: 2s;
    overflow: hidden;

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

export const Button = styled.input`
    display: none;
`;

export const AutoSlide = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 50px;

    &:not(:last-child){
        margin-right: 20px;
    }
`;

export const AutoButton = styled.div`
    border: none;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;

`;

export const Navigation = styled.div`
    position: absolute;
    width: 100%;
    margin-top: -40px;
     display: flex;
     justify-content: center;

`;

export const ManualButton = styled.label`
    border: none;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;

    &:not(:last-child){
        margin-right: 20px;
    }

    &:hover{
        background: #40d3dc;
    }
`;

////https://css-tricks.com/css-only-carousel/////