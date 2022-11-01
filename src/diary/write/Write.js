import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as W from './Write.styled.js';
import '../diary.css';

import Server from '../../config/server.json';

function Write(){

    let [title, setTitle] = useState();
    let [date, setDate] = useState();
    let [weather, setWeather] = useState();
    let [content, setContent] = useState();

    let navigate = useNavigate();

    const [selected, setSelected] = useState("");

    useEffect(() => {
        console.log(selected);
      }, [selected]);

    return(
        <div className='background'>
            <W.Box>

            {/* <W.Title>일기</W.Title> */}

                <W.SubBox>
                    <W.Input className='input_title' placeholder='제목' onChange={(e)=>{setTitle(e.target.value)}}></W.Input>
                    <W.Input className='input_content' type="date" onChange={(e)=>{setDate(e.target.value)}}></W.Input>
                    {/* <W.Input className='input_content' placeholder='날씨' onChange={(e)=>{setWeather(e.target.value)}}></W.Input> */}
                    <br></br>
                    
                    {/* <W.WeatherButton onClick={()=>{setWeather("맑음");}}>맑음</W.WeatherButton>
                    <W.WeatherButton onClick={()=>{setWeather("흐림");}}>흐림</W.WeatherButton>
                    <W.WeatherButton onClick={()=>{setWeather("비");}}>비</W.WeatherButton>
                    <W.WeatherButton onClick={()=>{setWeather("눈");}}>눈</W.WeatherButton> */}

                    <W.WeatherButton onClick={()=>setSelected("맑음")} className={selected === "맑음" && "selected"}>맑음</W.WeatherButton>
                    <W.WeatherButton onClick={()=>setSelected("흐림")} className={selected === "흐림" && "selected"}>흐림</W.WeatherButton>
                    <W.WeatherButton onClick={()=>setSelected("비")} className={selected === "비" && "selected"}>비</W.WeatherButton>
                    <W.WeatherButton onClick={()=>setSelected("눈")} className={selected === "눈" && "selected"}>눈</W.WeatherButton>
                    
                    <W.Input_Text className='input_content' placeholder='글' onChange={(e)=>{setContent(e.target.value)}}></W.Input_Text>

                    {/* <W.Button onClick={()=>{
                        axios.post(`${Server.server}/post/${localStorage.getItem("userName")}`,{title:title, date:date, weather:weather, content:content})
                        .then((result)=>{console.log(result)})
                        .catch(()=>{});
                        navigate('/list')
                    }}>작성하기</W.Button> */}

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