import { Link } from 'react-router-dom'

import './NavBar.css'

const linkStyle = {
  textDecoration: "none",
  color: "black",
};


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <>
        <div className='bottom-nav'>
          <Link style={linkStyle} to='/home'>
            <div id='bt-icon-container'>
              <i id='bt-icon' className='fa-solid fa-house'></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/leaderboard'>
            <div id='bt-icon-container'>
              <i id='bt-icon' className="fa-solid fa-chart-simple"></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/achievements'>
            <div id='bt-icon-container'>
              <i id='bt-icon' className="fa-solid fa-medal"></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/profile'>
            <div id='bt-icon-container'>
              <i id="bt-icon" className="fa-solid fa-user "></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/settings'>
            <div id='bt-icon-container'>
              <i id="bt-icon" className="fa-solid fa-gear"></i>
            </div>
          </Link>
        </div>
        </>
      )
      :
      (
        <>
        <div className='bottom-nav'>
          <Link style={linkStyle} to='/'>
            <div id='bt-icon-container'>
              <i id='bt-icon' className='fa-solid fa-house'></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/profile'>
            <div id='bt-icon-container'>
              <i id="bt-icon" className="fa-solid fa-user "></i>
            </div>
          </Link>
          <Link style={linkStyle} to='/settings'>
            <div id='bt-icon-container'>
              <i id="bt-icon" className="fa-solid fa-gear"></i>
            </div>
          </Link>
        </div>
        </>
      )
    }
    </nav>
  )
}

export default NavBar
