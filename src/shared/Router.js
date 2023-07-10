import React from "react"; //React 라이브러리에서 React 객체를 가져온다
import { BrowserRouter, Routes, Route } from "react-router-dom";
//react-router-dom 패키지에서 BrowserRouter, Routes, Route 컴포넌트를 가져옴
import Main from "../components/Main";
//Main 컴포넌트는 '../components/Main' 경로에서 가져온 컴포넌트
import DetailPage from "../components/detail/DetailPage";
//DetailPage 컴포넌트는 '../components/DetailPage' 경로에서 가져온 컴포넌트

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
//Router 컴포넌트를 외부로 내보냅니다.
// 이렇게 내보내면 다른 파일에서 이 컴포넌트를 가져와 사용할 수 있당께
