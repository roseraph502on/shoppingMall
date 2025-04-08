import { useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from "./page/Login"
import ProductDetail from "./page/ProductDetail"

function App() {


  return (
    <>
      {/* 상단바 */}
      <Navbar />
      {/* 각페이지 */}
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
