import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App p-4 h-screen flex items-center justify-center">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
