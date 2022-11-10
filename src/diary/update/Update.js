import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as U from './Update.styled.js';
import '../diary.css';

import Server from '../../config/server.json';

import { useRecoilState } from 'recoil'
import { contentState, dateState, post_idState, titleState, userNameState, weatherState } from '../../store/atom.js';

function Update(){
        
    let navigate = useNavigate();
    const location = useLocation();

    let [userName, setUserName] = useRecoilState(userNameState)
    let [title, setTitle] = useRecoilState(titleState)
    let [date, setDate] = useRecoilState(dateState)
    let [content, setContent] = useRecoilState(contentState)
    let [weather, setWeather] = useRecoilState(weatherState)
    let [post_id, setPost_id] = useRecoilState(post_idState)

    useEffect(()=>{
        console.log(location)
    },[])

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
                    <U.Input value={title} onChange={(e)=>{setTitle(e.target.value)}}></U.Input>
                    <U.Input value={date} readonly></U.Input>
                    <U.Input value={weather} readonly></U.Input>

                    <U.Input_Text value={content} onChange={(e)=>{setContent(e.target.value)}}></U.Input_Text>

                    <U.Button onClick={()=>{
                        axios.post(`${Server.server}/post/${location.pathname.split('/')[2]}`,{title:title, content:content})
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