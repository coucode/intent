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

  // useEffect(() => {
  //   const images = [
  //     "/static/images/splashpage/1.jpg",
  //     "/static/images/splashpage/2.jpg",
  //     "/static/images/splashpage/3.jpg",
  //     "/static/images/splashpage/4.jpg",
  //     "/static/images/splashpage/5.jpg",
  //     "/static/images/splashpage/6.jpg",
  //     "/static/images/splashpage/7.jpg",
  //     "/static/images/splashpage/8.jpg",
  //   ]
  //   count.current++
  //   let calc = count.current % 8
  //   let interval = setInterval(() => { setImage(images[calc]) }, 3000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [image])

  return (
    <div className='splash-container'>
      <nav className='splash-nav'>
        <div className='splash-logo'>
          <i className="fa-solid fa-meteor fa-2xl" id='splash-logo-color'></i>
          <p>Intent</p>
        </div>
        {sessionLinks}
      </nav>
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
      <div className='splash-dev-info'>
        <p>Hello</p>
      </div>


    </div>
  )
}

export default SplashPage