import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { contentState, dateState, post_idState, titleState, userNameState, weatherState } from '../../store/atom.js';

import axios from 'axios';

import * as W from './Write.styled.js';
import '../diary.css';

import { useRecoilState } from 'recoil'

import Server from '../../config/server.json';

function Write(){

    let [userName, setUserName] = useRecoilState(userNameState)
    let [title, setTitle] = useRecoilState(titleState)
    let [date, setDate] = useRecoilState(dateState)
    let [content, setContent] = useRecoilState(contentState)
    let [weather, setWeather] = useRecoilState(weatherState)
    let [post_id, setPost_id] = useRecoilState(post_idState)

    let navigate = useNavigate();

    const [selected, setSelected] = useState("");

    return(
        <div className='background'>
            <W.Box>

                <W.SubBox>
                    <W.Input className='input_title' placeholder='제목' onChange={(e)=>{setTitle(e.target.value)}}></W.Input>
                    <W.Input className='input_content' type="date" onChange={(e)=>{setDate(e.target.value)}}></W.Input>
                    <br></br>

                    <W.WeatherButton isSelected={selected === "맑음"} onClick={()=>setSelected("맑음")} >맑음</W.WeatherButton>
                    <W.WeatherButton isSelected={selected === "흐림"} onClick={()=>setSelected("흐림")} >흐림</W.WeatherButton>
                    <W.WeatherButton isSelected={selected === "비"} onClick={()=>setSelected("비")} >비</W.WeatherButton>
                    <W.WeatherButton isSelected={selected === "눈"} onClick={()=>setSelected("눈")} >눈</W.WeatherButton>
                    
                    <W.Input_Text className='input_content' placeholder='글' onChange={(e)=>{setContent(e.target.value)}}></W.Input_Text>

                    <W.Button onClick={()=>{
                        axios.post(`${Server.server}/post/${localStorage.getItem("userName")}`,{title:title, date:date, weather:selected, content:content})
                        .then((result)=>{console.log(result)})
                        .catch(()=>{});
                        navigate('/list')
                    }}>작성하기</W.Button>

                </W.SubBox>
            </W.Box>
        </div>
        
    )
}

export default Write