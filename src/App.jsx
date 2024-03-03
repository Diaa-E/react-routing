import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>App title</h1>
      <p>Links to other pages</p>
      <nav>
        <ul>
          <li>
            <a href="Profile">Profile page</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
