import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import SignIn from '../SignIn'
import Events from '../Events/Events'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes(
        [
            {path: '/', element: <Home />}, 
            {path: '/sign-in', element: <SignIn />},
            {path: '/events', element: <Events />},
        ]
        )
    
    return routes
}

const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    
  )
}

export default App
