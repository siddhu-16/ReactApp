import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './currencyComp/Home.jsx'
import Layout from './Layout.jsx'
import Increment from './components/inc.jsx'
import PasswordG from './components/PasswordG.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout />} >
      <Route path='' element={< Home />} />
      <Route path='inc' element={<Increment />} />
      <Route path='passgen' element={< PasswordG />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
