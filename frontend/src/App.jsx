import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BasicInfo from './pages/onboarding/BasicInfo'
import Category from './pages/onboarding/Category'
import Domains from './pages/onboarding/Domains'
import Resume from './pages/onboarding/Resume'
import Planner from './pages/Planner'
import MainFeed from './pages/MainFeed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding/basic-info" element={<BasicInfo />} />
        <Route path="/onboarding/category" element={<Category />} />
        <Route path="/onboarding/domains" element={<Domains />} />
        <Route path="/onboarding/resume" element={<Resume />} />
        <Route
          path="/home"
          element={
            <ErrorBoundary>
              <MainFeed />
            </ErrorBoundary>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary>
              <MainFeed />
            </ErrorBoundary>
          }
        />
        <Route path="/subscribe" element={<Planner />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
