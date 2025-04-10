import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import 'primereact/resources/themes/lara-light-blue/theme.css'; // 테마
import 'primereact/resources/primereact.min.css'; // 기본 스타일
import 'primeicons/primeicons.css'; // 아이콘 스타일

import './App.css'
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from "./page/Login"
import PrivateRoute from "./route/PrivateRoute"

function App() {
const[authenticate,setAuthenticate]  = useState(false);

const handleLogout = () => {
  setAuthenticate(false);
  localStorage.removeItem('user'); 
  console.log("사용자 정보 제거");
};

useEffect(()=>{
  const user = localStorage.getItem('user');
    if (user) {
      setAuthenticate(true);
    } },[]);
  return (
    
    <>
      {/* 상단바 */}
      <Navbar authenticate={authenticate} onLogout={handleLogout}/>
      {/* 각페이지 */}
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </>
  )
}

export default App
