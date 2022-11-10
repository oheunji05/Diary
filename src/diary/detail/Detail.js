import React, {useEffect, useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

import * as D from './Datail.styled.js';
import '../diary.css';

import Server from '../../config/server.json';

import { useRecoilState } from 'recoil';
import { contentState, dateState, post_idState, titleState, userNameState, weatherState } from '../../store/atom.js';

function Datail(){

    let [userName, setUserName] = useRecoilState(userNameState)
    let [title, setTitle] = useRecoilState(titleState)
    let [date, setDate] = useRecoilState(dateState)
    let [content, setContent] = useRecoilState(contentState)
    let [weather, setWeather] = useRecoilState(weatherState)
    let [post_id, setPost_id] = useRecoilState(post_idState)

    useEffect(()=>{
        axios.get(`${Server.server}/post/`)
        .then((data)=>{console.log(data.list.postId)})
        .catch(()=>{})
    })

    let navigate = useNavigate();

    return(
        <div className='background'>
            <D.Box>
                <D.SubBox>
                    <D.Input value={title} readonly></D.Input>
                    <D.Input value={date} readonly></D.Input>
                    <D.Input value={weather} readonly></D.Input>

                    <D.Input_Text value={content} readonly></D.Input_Text>

                    <D.Button onClick={()=>{navigate('/update')}}>일기수정</D.Button>
                    <D.Button onClick={()=>{navigate('/list')}}>일기삭제</D.Button>
                </D.SubBox>
            </D.Box>
        </div>
    )
}

export default Datail;