import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Barberia } from './Barberia.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'





ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Barberia />
    </React.StrictMode>
  </BrowserRouter>,
)
