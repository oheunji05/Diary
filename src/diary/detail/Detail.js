import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import * as D from "./Datail.styled.js";
import "../diary.css";
import Server from "../../config/server.json";

const Datail = () => {
  const location = useLocation();
  let navigate = useNavigate();

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
      .catch((error) => {console.log(error);});
  }, [location]);

  const deletePost = () => {
    axios.delete(`${Server.server}/post/${postId}`)
      .then(() => {
        console.log("삭제성공");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <D.Box>
        <D.SubBox>
          <D.Input value={title}></D.Input>
          <D.Input value={date}></D.Input>
          <D.Input value={weather}></D.Input>

          <D.Input_Text value={content}></D.Input_Text>

          <D.Button onClick={() => {navigate(`/update/${postId}`);}}>일기수정</D.Button>
          <D.Button onClick={() => {deletePost(); navigate("/list");}}>일기삭제</D.Button>
        </D.SubBox>
      </D.Box>
    </div>
  );
};

export default Datail;
