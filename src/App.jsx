import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Timer from './pages/Timer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
