import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as U from './Update.styled.js';
import '../diary.css';

import Server from '../../config/server.json';

function Update({userName, title, date, content, weather}){

    useEffect(()=>{
        console.log(userName + " " + title + " " + date + " " + content + " " + weather)
    },[userName, title, date, content, weather])

    let navigate = useNavigate();

    return(
        <div className='background'>
            <U.Box>

                <U.SubBox>
                    {/* <U.Input className='input_title' placeholder='제목' onChange={(e)=>{setTitle(e.target.value)}}></U.Input>
                    <U.Input className='input_content' type="date" onChange={(e)=>{setDate(e.target.value)}}></U.Input>
                    <br></br>
                    
                    <U.WeatherButton onClick={()=>{setWeather("맑음")}}>맑음</U.WeatherButton>
                    <U.WeatherButton onClick={()=>{setWeather("흐림")}}>흐림</U.WeatherButton>
                    <U.WeatherButton onClick={()=>{setWeather("비")}}>비</U.WeatherButton>
                    <U.WeatherButton onClick={()=>{setWeather("눈")}}>눈</U.WeatherButton>

                    <U.Input_Text className='input_content' placeholder='글' onChange={(e)=>{setContent(e.target.value)}}></U.Input_Text> */}
                    <U.Input value={title} ></U.Input>
                    <U.Input value={date} readonly></U.Input>
                    <U.Input value={weather} readonly></U.Input>

                    <U.Input_Text value={content} ></U.Input_Text>

                    <U.Button onClick={()=>{
                        axios.post(`${Server.server}/post/${localStorage.getItem("post_id")}`,{title:title, content:content})
                        .then((result)=>{})
                        .catch(()=>{});
                        navigate('/list')
                    }}>수정완료</U.Button>

                </U.SubBox>
            </U.Box>
        </div>
        
    )
}

export default Update