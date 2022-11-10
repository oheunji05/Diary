import { useState } from "react";

import * as N from './Nav.styled.js';

import Logo from '../image/Logo.png';
import Search from '../image/search.png';
import Home from '../image/home.png';
import Write from '../image/write.png';
import List from '../image/list.png';
import Logout from '../image/logout.png';

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ignore = [
    "/","/login", "/register"
]

function Navbar(){

    let [search, setSearch] = useState()

    let navigate = useNavigate();

    const { pathname } = useLocation();
    if (ignore.includes(pathname)) {
        return null;
    }

    else {
        return(
            <N.NavHead>
                <N.Img src={Logo} width="130px" height="130px"></N.Img>

                <N.Seach_Part>
                    {/* <N.Input placeholder="검색"></N.Input>
                    <N.Search_Button onClick={()=>{

                    }}><N.Search_Icon src={Search}></N.Search_Icon></N.Search_Button> */}
                </N.Seach_Part>

                <N.Button onClick={()=>{navigate('/main')}}><N.Icon src={Home}></N.Icon>메인페이지</N.Button>
                <N.Button onClick={()=>{navigate('/write')}}><N.Icon src={Write}></N.Icon>일기 작성</N.Button>
                <N.Button onClick={()=>{navigate('/list')}}><N.Icon src={List}></N.Icon>일기 목록</N.Button>

                <N.Logout_Button onClick={()=>{navigate('/login')}}><N.Icon src={Logout}></N.Icon>로그아웃</N.Logout_Button>

            </N.NavHead>
        )
    }
}

export default Navbar;