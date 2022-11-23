import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Logo from '../image/Logo.png';

import * as R from './Login.styled.js';
import '../diary/diary.css';

import Server from '../config/server.json';

function Register(){

    let [name, setName] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate();

    return(
        <R.Main className='background'>
            <R.Box>

                <R.SubBox_Left>
                    <img src={Logo} width="300px" height="300px"></img>
                </R.SubBox_Left>

                <R.SubBox_Right>

                    <R.Title>SIGN-UP</R.Title>

                    <R.Input placeholder="이름을 입력하세요" onChange={(e)=>{
                        setName(e.target.value)
                    }}></R.Input>

                    <br/>

                    <R.Input type='password' placeholder="비밀번호를 입력하세요" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></R.Input>

                    <br/>

                    <R.Button onClick={()=>{
                        axios.post(`${Server.server}/auth/sign-up`,{userName:name, userPassword:password})
                        .then((result)=>{navigate('/login')})
                        .catch((result)=>{alert('회원가입에 실패하였습니다.')})
                    }}>회원가입</R.Button>

                    <br/>
                    
                    <R.Sub>
                        <R.A href="/login">로그인</R.A>
                    </R.Sub>
                    
                </R.SubBox_Right>

            </R.Box>
        </R.Main>
    )
}

export default Register