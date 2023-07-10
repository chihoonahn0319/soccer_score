import React from "react";
{
  /*  React 라이브러리에서 React 객체를 가져온다. */
}
import Router from "./shared/Router";
{
  /*  상대 경로 ./shared/Router에서 Router 컴포넌트를 가져옵니다. Router는 
페이지 라우팅을 처리하는 컴포넌트. */
}

function App() {
  return (
    <>
      {/* 애플리케이션의 진입점인 App 컴포넌트 */}
      <Router /> {/* 라우팅을 처리하는 컴포넌트 */}
    </>
  );
}

export default App;
{
  /* 컴포넌트를 모듈의 기본 내보내기로 설정
이렇게 하면 다른 파일에서 App 컴포넌트를 가져올 수 있음. */
}
