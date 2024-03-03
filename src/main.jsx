import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './components/Profile'
import App from './App.jsx'
import './index.css'
import Popeye from './components/Popeye.jsx'
import Spinach from './components/Spinach.jsx'
import DefualtProfile from './components/DefaultProfile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <DefualtProfile />
      },
      {
        path: "popeye",
        element: <Popeye />
      },
      {
        path: "spinach",
        element: <Spinach />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
