import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

import SplashLogoutButton from '../auth/SplashLogoutButton'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import './SplashPage.css'

function SplashPage() {
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  let count = useRef(0)
  const [image, setImage] = useState('/static/images/splashpage/8.jpg')

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

  useEffect(() => {
    const images = [
      "/static/images/splashpage/1.jpg",
      "/static/images/splashpage/2.jpg",
      "/static/images/splashpage/3.jpg",
      "/static/images/splashpage/4.jpg",
      "/static/images/splashpage/5.jpg",
      "/static/images/splashpage/6.jpg",
      "/static/images/splashpage/7.jpg",
      "/static/images/splashpage/8.jpg",
    ]
    count.current++
    let calc = count.current % 8
    let interval = setInterval(() => { setImage(images[calc]) }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [image])

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
        <div
          className='splash-images'
          style={{ backgroundImage: `url("${image}")` }}
        >
        </div>
      </div>

      {/* DEVELOPER INFORMATION */}
      <div className='splash-dev-info'>
        <div className='splash-dev-text'>
          <p className='splash-dev-inner-text'>Developer:</p>
          <p className='splash-dev-inner-text' style={{color: "var(--orange-button-color)", fontSize: '30px'}}>Cecilia Ou</p>

        </div>
        <div className='splash-links' >
          <a href="https://github.com/coucode" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github fa-2xl devLinks"></i>
          </a>
          <a href="https://www.linkedin.com/in/ceciliasou"  target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl devLinks"></i>
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className='splash-about'>
        <div className='splash-content'>
          <div className='splash-header-container'>
            <h2 className='splash-headers'>How it works</h2>
          </div>
          <div className='splash-text-container'>
            <p className='splash-text'>
              Intent allows learners to commit steps of a procedure or task to memory.
              Intent is modeled after flashcards, but with the added functionality of
              sequence tracking.
              Through Intent, users are able to complete procedures and tasks more
              quickly and efficiently than alone.
            </p>
          </div>

          <div className='splash-header-container'>
            <h2 className='splash-headers'>Categories</h2>
          </div>
          <div className='splash-text-container'>
            <p className='splash-text'>
              Categories organize your procedures and tasks (known as topics) into a central location.
            </p>
          </div>

          <div className='splash-header-container'>
            <h2 className='splash-headers'>Topics</h2>
          </div>
          <div className='splash-text-container'>
            <p className='splash-text'>
              Topics are the individual procedures or tasks that you would like to commit to memory.
              We recommend thinking about topics as "How To's".
            </p>
          </div>


          <div className='splash-header-container'>
            <h2 className='splash-headers'>Steps</h2>
          </div>
          <div className='splash-text-container'>
            <p className='splash-text'>
              Topics contain steps. Steps are the series of actions required to complete a topic.
              Steps can be assigned a step number, a short summary, and a more in depth of
              description of the step in question.
            </p>
          </div>

        </div>
      </div>
      

    </div>
  )
}

export default SplashPage