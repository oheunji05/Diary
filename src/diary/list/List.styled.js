import styled from "styled-components";

export const Main = styled.div`
    width: 207vh;
    height: 100vh;
`

export const ListBoxPart = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    position: absolute;
    left: 18.5%;
`

export const ListBox = styled.div`
    width: 350px;
    height: 250px;
    background-color: #FFF1C0;
    margin: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    &:hover{
        background-color: #FFE483;
    }
`


export const ListTitle_Date = styled.div`
    width: 330px;
    height: 48px;
    margin-bottom: 8px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 13px;
`

export const ListTitle = styled.div`
    font-size: 17px;
    font-family: 'Jua-Regular';
    margin-top: 2px;
`

export const ListDate = styled.div`
    font-size: 13px;
    color: gray;
    font-family: 'Jua-Regular';
`

export const ListContent = styled.div`
    width: 330px;
    height: 134px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    align-items: flex-start;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 8px;
    font-family: 'Jua-Regular';
`

export const ListWeather = styled.div`
    width: 330px;
    height: 35px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    align-items: flex-start;
    padding-left: 13px;
    padding-top: 6px;
    font-family: 'Jua-Regular';
`