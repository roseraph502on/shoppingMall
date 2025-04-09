import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from "./page/Login"
import PrivateRoute from "./route/PrivateRoute"

function App() {
const[authenticate,setAuthenticate]  = useState(false);

useEffect(()=>{
  console.log(authenticate)
},[authenticate])
  return (
    
    <>
      {/* 상단바 */}
      <Navbar />
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
