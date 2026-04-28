import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className="bg-gray-900 text-gray-100 border-b border-gray-800">
      <nav className="max-w-3xl mx-auto flex items-center justify-center gap-8 py-3 px-4">
        <Link to="/home" className="text-blue-400">Home</Link>
        <Link to="/login" className="text-blue-400">Login</Link>
        <Link to="/register" className="text-blue-400">Cadastro</Link>
      </nav>
    </div>
  )
}
