import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Header from './components/Header'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
export default function App() {
  return (
    <BrowserRouter className="text-red-500 font-bold">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}
