import React, {useEffect, useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import './App.css';

import Login from './auth/Login.js';
import Write from './diary/write/Write.js';
import List from './diary/list/List.js';
import Register from './auth/Register.js';
import Navbar from './nav/Navbar.js';
import Detail from './diary/detail/Detail.js';
import Update from './diary/update/Update.js';

function App() {

  let [userName, setUserName] = useState()
  let [title, setTitle] = useState([])
  let [date, setDate] = useState([])
  let [content, setContent] = useState([])
  let [weather, setWeather] = useState([])
  let [post_id, setPost_id] = useState()

  useEffect(()=>{
    console.log(userName)
  },[userName])

  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/main' element={<></>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='/list' element={<List setUserName={setUserName} setTitle={setTitle} setDate={setDate} setContent={setContent} setWeather={setWeather} setPost_id={setPost_id}></List>}></Route>
        <Route path='/detail' element={<Detail userName={userName} title={title} date={date} content={content} weather={weather} post_id={post_id}></Detail>}></Route>
        <Route path='/update' element={<Update userName={userName} title={title} date={date} content={content} weather={weather} post_id={post_id}></Update>}></Route>
      </Routes>

    </div>
  );
}

export default App;
