import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as L from './List.styled.js';
import '../diary.css';

import Server from '../../config/server.json';

function List({setUserName, setTitle, setDate, setContent, setWeather}){

    let [list, setList] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        loadPage(1)
    })

    let loadPage = (page) => {
        axios.get(`${Server.server}/post/`)
            .then((data) => {
                console.log('데이터' + JSON.stringify(data.data))
                setList(data.data.list);
            
            })
            .catch(() => {})
    }

    return(
        <L.Main className='background'>

            {console.log(list)}
            <L.ListBoxPart>
                {
                    list.map((element,index)=>{
                        
                        return(
                            <L.ListBox onClick={()=>{console.log(element); setUserName(element.userName); setTitle(element.title); setDate(element.date); setContent(element.content); setWeather(element.weather); navigate('/detail')}}>

                                <L.ListTitle_Date>
                                    <L.ListTitle>{element.title}</L.ListTitle>
                                    <L.ListDate>{element.date}</L.ListDate>
                                </L.ListTitle_Date>

                                <L.ListContent>{element.content}</L.ListContent>

                                <L.ListWeather>{element.weather}</L.ListWeather>
                            </L.ListBox>
                        )
                    })
                }
            </L.ListBoxPart>
        </L.Main>
    )
}

export default List