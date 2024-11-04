import React from 'react'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  )
}
