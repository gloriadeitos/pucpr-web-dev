import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function RoutesContent(){
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 min-h-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function AppRoutes(){
  return (
    <Router>
      <RoutesContent />
    </Router>
  )
}
