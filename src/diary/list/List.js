import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import * as L from "./List.styled.js";
import "../diary.css";
import Server from "../../config/server.json";

function List() {
  const location = useLocation();
  let [list, setList] = useState([]);

  let [userName, setUserName] = useState("");
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [content, setContent] = useState("");
  let [weather, setWeather] = useState("");
  let [post_id, setPost_id] = useState("");

  let navigate = useNavigate();

  const ax = ()=>{
    axios.get(`${Server.server}/post/`)
      .then((data) => {
        setList(data.data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    ax()
  }, [location]);

  return (
    <L.Main className="background">
      <L.ListBoxPart>
        {
          list.map((element, index) => {
            return (
              <L.ListBox onClick={() => {setUserName(element.userName); setTitle(element.title); setDate(element.date); setContent(element.content); setWeather(element.weather); navigate(`/detail/${element.postId}`);}}>
                <L.ListTitle_Date>
                  <L.ListTitle>{element.title}</L.ListTitle>
                  <L.ListDate>{element.date}</L.ListDate>
                </L.ListTitle_Date>

                <L.ListContent>{element.content}</L.ListContent>

                <L.ListWeather>{element.weather}</L.ListWeather>
              </L.ListBox>
            );
          })
        }
      </L.ListBoxPart>
    </L.Main>
  );
}

export default List;