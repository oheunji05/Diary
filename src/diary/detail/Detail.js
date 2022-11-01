import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as D from './Datail.styled.js';
import '../diary.css';

function Datail({userName, title, date, content, weather}){

    useEffect(()=>{
        console.log(userName + " " + title + " " + date + " " + content + " " + weather)
    },[userName, title, date, content, weather])

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