import styled from "styled-components";
import '../App.css';

export const Main = styled.div`
    width: 207vh;
    height: 100vh;
`

export const Box = styled.div`
    width: 850px;
    height: 525px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
    box-shadow: 2px 2px 2px 2px rgb(179, 179, 179);
` 

export const SubBox_Left = styled.div`
    width: 425px;
    height: 525px;
    background-color: #FFE483;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubBox_Right = styled.div`
    //background-image: url('../logo.jpg');
    width: 425px;
    height: 525px;
    background-color: #FFF6D6;
    border-radius: 0px 10px 10px 0px;
`

export const Input = styled.input`
    width: 300px;
    height: 43px;
    margin-bottom: 20px;
    border-radius: 25px;
    padding-left: 13px;
    font-size: 13px;
    outline: 0;
    border: 0;
    padding-left: 15px;
    /* border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid; */
`

export const Button = styled.button`
    width: 300px;
    height: 43px;
    font-size: 15px;
    margin-top: 25px;
    margin-bottom: 15px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    background-color: #FFE483;
    color: #B4B4B4;
    font-family: 'Jua-Regular';

    &:hover{  
        background-color : #FFD43D;
    }
`

export const Title = styled.h1`
    font-size: 30px;
    color: #52CBFF;
    font-weight: bold;
    margin-top: 80px;
    margin-bottom: 80px;
    font-family: 'Jua-Regular';
    
`

export const Sub = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 70px;
`

export const A = styled.a`
    font-size: 14px;
    color: #52CBFF;
    font-family: 'Jua-Regular';
`

