import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./auth/Login.js";
import Write from "./diary/write/Write.js";
import List from "./diary/list/List.js";
import Register from "./auth/Register.js";
import Navbar from "./nav/Navbar.js";
import Detail from "./diary/detail/Detail.js";
import Update from "./diary/update/Update.js";
import Main from "./main/Main.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/write" element={<Write></Write>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/detail/:postId" element={<Detail></Detail>}></Route>
        <Route path="/update/:post" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
