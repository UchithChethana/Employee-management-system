import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insert">➕ Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactMe">👨‍💻 About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
