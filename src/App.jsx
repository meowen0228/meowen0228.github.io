import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './i18n/i18n'

import TimerHome from './pages/TimerHome'
import Timer from './pages/Timer'

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<TimerHome />}>
        <Route index element={<Timer />} />
        <Route path="history" element={<Timer />} />
        <Route path="template" element={<Timer />} />
        <Route path="style" element={<Timer />} />
      </Route>
      <Route path="/" element={<TimerHome />} />
      <Route path="*" element={<Navigate to="/timer" replace />} />
    </Routes>
  )
}

export default App
