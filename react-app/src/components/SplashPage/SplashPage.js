import { NavLink } from 'react-router-dom'
import './SplashPage.css'

function SplashPage() {
  return (
    <div>
      <h1>This is the Splash Page!</h1>
      <div>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
      <div>
        <NavLink to="/signup" className="splashpageSignup">
          Get Started
        </NavLink>
      </div>
    </div>
  )
}

export default SplashPage