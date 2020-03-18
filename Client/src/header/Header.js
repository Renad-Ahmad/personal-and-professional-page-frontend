import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/update-info">Update my Info</Link>
    <Link to="/add-resume">Add New resume</Link>
    <Link to=" /show-resumes">Show Your Resumes</Link>
    <Link to="/resumes">Show my Resumes</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user, profile }) => (
  <header className="main-header">
    <h1>Personal and Professional Page</h1>
    <nav>
      {user && <span>{`Welcome, ${user.firstName} ${user.lastName}`}</span>}
      {user ? authenticatedOptions : unauthenticatedOptions}
      {alwaysOptions}
    </nav>
  </header>
)

export default Header
