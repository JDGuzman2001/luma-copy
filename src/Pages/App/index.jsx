import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes(
        [
            {path: '/', element: <Home />}, 
            // {path: '/*', element: <NotFound />},
            {path: '/sign-in', element: <SignIn />},
        ]
        )
    
    return routes
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <AppRoutes />
        <Navbar/>
    </BrowserRouter>
    
  )
}

export default App
