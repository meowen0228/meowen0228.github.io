import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './i18n/i18n'

import { Timer, TimerHome, TimerHistory } from './pages/index'

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<TimerHome />}>
        <Route index element={<Timer />} />
        <Route path="history" element={<TimerHistory />} />
        <Route path="template" element={<Timer />} />
        <Route path="style" element={<Timer />} />
      </Route>
      <Route path="/" element={<TimerHome />} />
      <Route path="*" element={<Navigate to="/timer" replace />} />
    </Routes>
  )
}

export default App
