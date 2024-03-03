import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h1>App title</h1>
      <p>Links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
