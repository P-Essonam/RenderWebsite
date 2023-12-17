import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { App,BluePrints,EnvGroup,Invite } from './sections'
import { Layout } from './layouts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App/>} />
        <Route path='/BluePrints' element={<BluePrints />} />
        <Route path='/EnvGroup' element={<EnvGroup />} />
        <Route path='/invites' element={<Invite />} />
      </Route>
    </Routes>
    
  </BrowserRouter>
)
