import styled from "styled-components";

export const Box = styled.div`
    width: 100vh;
    height: 100vh;
    border-radius: 10px;
    margin-left: 850px;
    display: flex;
` 

export const SubBox = styled.div`
    width: 550px;
    height: 650px;
    background-color: #FFE483;
    border-radius: 25px;
    padding-top: 10px;
    margin-top: 16%;
`

export const Title = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%);
    width: 15%;
    border-bottom: 3px solid #52CBFF;
    font-size: 20px;
    font-weight: bold;
    color: #52CBFF;
`

export const Input = styled.input`
    width: 450px;
    height: 40px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    margin-top: 20px;
    font-size: 17px;
    font-family: 'Jua-Regular';
    &:placeholder {
        color: #52CBFF;
    }
    padding-left: 15px;
    padding-right: 10px;
`

export const Input_Text = styled.textarea`
    width: 450px;
    height: 340px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    margin-top: 30px;
    margin-bottom: 2px;
    font-size: 17px;
    font-family: 'Jua-Regular';
    /* &::-webkit-input-placeholder {
        color: #52CBFF;
    } */
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
`

export const Button = styled.button`
    width: 210px;
    height: 40px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    background-color: white;
    color: #52CBFF;
    font-family: 'Jua-Regular';
    font-weight: bold;
    &:hover{  
        background-color : #FFD43D;
    }
`