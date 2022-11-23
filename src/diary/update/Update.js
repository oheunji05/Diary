import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import * as U from "./Update.styled.js";
import "../diary.css";
import Server from "../../config/server.json";

function Update() {

  let navigate = useNavigate();
  const location = useLocation();

  let [userName, setUserName] = useState("");
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [content, setContent] = useState("");
  let [weather, setWeather] = useState("");

  const postId = location.pathname.split("/")[2];

  useLayoutEffect(() => {
    axios.get(`${Server.server}/post/${postId}`)
      .then((data) => {
        console.log(data.data);
        const d = data.data;
        setTitle(d.title);
        setDate(d.date);
        setContent(d.content);
        setWeather(d.weather);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  return (
    <div className="background">
      <U.Box>
        <U.SubBox>
          <U.Input value={title} onChange={(e) => {setTitle(e.target.value);}}></U.Input>
          <U.Input value={date} readonly></U.Input>
          <U.Input value={weather} readonly></U.Input>

          <U.Input_Text value={content} onChange={(e) => {setContent(e.target.value);}}></U.Input_Text>

          <U.Button onClick={() => {
              axios.patch(`${Server.server}/post/${location.pathname.split("/")[2]}`, {title: title,content: content})
              .then((result) => {
                console.log("수정성공");
              })
              .catch((error) => {
                console.log(error);
              });
              navigate("/list");
            }}>수정완료</U.Button>

        </U.SubBox>
      </U.Box>
    </div>
  );
}

export default Update;
