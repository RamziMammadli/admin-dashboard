import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Chat } from '../pages/Chat'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Dashboard/>} path='/'/>
      <Route element={<Chat/>} path='/chat'/>
    </Routes>
    </BrowserRouter>
    )
}

export default Router