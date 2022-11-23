import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as W from "./Write.styled.js";
import "../diary.css";
import Server from "../../config/server.json";

function Write() {
  let [userName, setUserName] = useState("");
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [content, setContent] = useState("");
  let [weather, setWeather] = useState("");
  let [post_id, setPost_id] = useState("");

  let navigate = useNavigate();

  const [selected, setSelected] = useState("");

  return (
    <div className="background">
      <W.Box>
        <W.SubBox>
          <W.Input className="input_title" placeholder="제목" onChange={(e) => {setTitle(e.target.value);}}></W.Input>
          <W.Input className="input_content" type="date" onChange={(e) => { setDate(e.target.value);}}></W.Input>
          <br></br>

          <W.WeatherButton isSelected={selected === "맑음"} onClick={() => setSelected("맑음")}>맑음</W.WeatherButton>
          <W.WeatherButton isSelected={selected === "흐림"} onClick={() => setSelected("흐림")}>흐림</W.WeatherButton>
          <W.WeatherButton isSelected={selected === "비"} onClick={() => setSelected("비")}>비</W.WeatherButton>
          <W.WeatherButton isSelected={selected === "눈"} onClick={() => setSelected("눈")}>눈</W.WeatherButton>

          <W.Input_Text className="input_content" placeholder="글" onChange={(e) => {setContent(e.target.value);}}></W.Input_Text>

          <W.Button onClick={() => {
              axios.post(`${Server.server}/post/${localStorage.getItem("userName")}`, {title: title, date: date, weather: selected, content: content})
              .then((result) => {})
              .catch(() => {});
              navigate("/list");
            }}>작성하기</W.Button>
            
        </W.SubBox>
      </W.Box>
    </div>
  );
}

export default Write;
