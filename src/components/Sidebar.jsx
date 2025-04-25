import { Link } from 'react-router-dom'
import './Sidebar.css'
import home50 from '../assets/home50.svg'
import settings50 from '../assets/settings50.svg'
import person50 from '../assets/person50.svg'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/"> <img src={home50} alt='Home' /></Link></li>
        <li><Link to="/settings"> <img src={settings50} alt='Settings' /></Link></li>
        <li><Link to="/profile"> <img src={person50} alt='Profile' /></Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
