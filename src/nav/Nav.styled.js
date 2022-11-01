import styled from "styled-components";

export const NavHead = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #FFE483;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    position: fixed;
`

export const Img = styled.img`
    width: 140px;
    height: 140px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    width: 270px;
    height: 40px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    background-color: white;
    margin-bottom: 25px;
    color: #52CBFF;
    font-size: 17px;
    font-family: 'Jua-Regular';
    &:hover{  
        background-color : #FFD43D;
    }
`

export const Logout_Button = styled.button`
    width: 270px;
    height: 40px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    background-color: white;
    margin-top: 290px;
    color: #52CBFF;
    font-family: 'Jua-Regular';
    font-size: 17px;
    &:hover{  
        background-color : #FFD43D;
    }
`

export const Icon = styled.img`
    width: 17px;
    height: 17px;
    margin-bottom: 6px;
    margin-right: 10px;
`

export const Seach_Part = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
`

export const Input = styled.input`
    width: 235px;
    height: 40px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    padding-left: 15px;
    font-family: 'Jua-Regular';
    font-size: 17px;
    &::-webkit-input-placeholder {
        color: #52CBFF;
    }
`

export const Search_Button = styled.button`
    width: 30px;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: #FFE483;
`

export const Search_Icon = styled.img`
    width: 21px;
    height: 21px;
    margin-left: 5px;
`