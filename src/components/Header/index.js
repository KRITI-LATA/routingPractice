// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="blog-icon-container">
        <img
          className="blog-image"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="blog-title">Wave</h1>
      </div>
      <ul className="nav-container">
        <li className="nav-menu">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-menu">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-menu">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
