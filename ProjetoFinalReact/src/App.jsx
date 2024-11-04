import React from 'react'
import Add from './pages/Add'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Add/> 
      {/* </BrowserRouter> */}
    </div>
  )
}
