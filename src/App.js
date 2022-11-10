import React, {useEffect, useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { useRecoilState } from 'recoil'
import { userNameState } from './store/atom'
import { titleState } from './store/atom'
import { dateState } from './store/atom'
import { contentState } from './store/atom'
import { weatherState } from './store/atom'
import { post_idState } from './store/atom'

import './App.css';

import Login from './auth/Login.js';
import Write from './diary/write/Write.js';
import List from './diary/list/List.js';
import Register from './auth/Register.js';
import Navbar from './nav/Navbar.js';
import Detail from './diary/detail/Detail.js';
import Update from './diary/update/Update.js';
import Main from './main/Main.js';

function App() {

  let [userName, setUserName] = useRecoilState(userNameState)
  let [title, setTitle] = useRecoilState(titleState)
  let [date, setDate] = useRecoilState(dateState)
  let [content, setContent] = useRecoilState(contentState)
  let [weather, setWeather] = useRecoilState(weatherState)
  let [post_id, setPost_id] = useRecoilState(post_idState)

  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='/list' element={<List ></List>}></Route>
        <Route path='/detail/:postId' element={<Detail></Detail>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
      </Routes>

    </div>
  );
}

export default App;
