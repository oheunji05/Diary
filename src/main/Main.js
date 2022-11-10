import * as M from './Main.styled.js';

import Logo from '../image/Logo.png';

function Main(){
    return(
        <M.Box>
            <M.SubBox>
                <M.Img src={Logo} width='400px' height='400px'></M.Img>
                <M.Title>'수고했어, 오늘도'란?</M.Title>
                <M.Content>대구소프트웨어마이스터고등학교 학생이 혼자 프로젝트 실습 과제로 개발한,</M.Content>
                <M.Content>오늘 하루 수고했다는 마음을 담아 일기를 작성하는 플랫폼입니다.</M.Content>
            </M.SubBox>
        </M.Box>
    )
}

export default Main