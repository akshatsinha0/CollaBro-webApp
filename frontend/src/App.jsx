import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import BasicInfo from './pages/onboarding/BasicInfo.jsx'
import Category from './pages/onboarding/Category.jsx'
import Domains from './pages/onboarding/Domains.jsx'
import Resume from './pages/onboarding/Resume.jsx'
import Planner from './pages/Planner.jsx'
import MainFeed from './pages/MainFeed.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding/basic-info" element={<BasicInfo/>} />
        <Route path="/onboarding/category" element={<Category/>} />
        <Route path="/onboarding/domains" element={<Domains/>} />
        <Route path="/onboarding/resume" element={<Resume/>} />
        <Route path="/home" element={<MainFeed />} />
        <Route path="/subscribe" element={<Planner />} />
        <Route path="/dashboard" element={<MainFeed />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
