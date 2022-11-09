import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

import SplashLogoutButton from '../auth/SplashLogoutButton'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import AboutIntent from './About'
import SplashCarousel from './Carousel'
import './SplashPage.css'

function SplashPage() {
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  let sessionLinks = (
    <div className='splash-start-container'>
      <LoginModal />
      <SignUpModal />
    </div>
  )

  const handleLandingRedirect = async (e) => {
    await history.push('/')
  }

  if (user) {
    sessionLinks = (
      <div className='splash-start-container'>
        <button onClick={handleLandingRedirect} className='splash-buttons' id='splash-teal'>Home</button>
        <SplashLogoutButton />
      </div>
    )
  }

  return (
    <div className='splash-container'>
      {/* NAVIGATION BAR */}
      <nav className='splash-nav'>
        <div className='splash-logo'>
          <i className="fa-solid fa-meteor fa-2xl" id='splash-logo-color'></i>
          <p>Intent</p>
        </div>
        {sessionLinks}
      </nav>

      {/* BACKGROUND IMAGE AND MAIN AD */}
      <div className='splash-main-content'>
        <div className='splash-quote-container'>
          <h1 className='splash-quote'>Learn</h1>
          <h1 className='splash-quote'>with Intent</h1>
        </div>
        <SplashCarousel />
      </div>

      {/* DEVELOPER INFORMATION */}
      <div className='splash-dev-info'>
        <div className='splash-dev-text'>
          <p className='splash-dev-inner-text'>Developer:</p>
          <p className='splash-dev-inner-text' style={{ color: "var(--orange-button-color)", fontSize: '30px' }}>Cecilia Ou</p>

        </div>
        <div className='splash-links' >
          <a href="https://github.com/coucode" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github fa-2xl devLinks"></i>
          </a>
          <a href="https://www.linkedin.com/in/ceciliasou" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl devLinks"></i>
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <AboutIntent />

    </div>
  )
}

export default SplashPage