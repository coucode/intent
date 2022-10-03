import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import SplashLogoutButton from '../auth/SplashLogoutButton'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import './SplashPage.css'

function SplashPage() {
  const user = useSelector(state => state.session.user)
  let count = useRef(0)
  const [image, setImage] = useState('https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  let sessionLinks = (
    <div className='splash-start-container'>
      <LoginModal />
      <SignUpModal />
    </div>
  )

  if (user) {
    sessionLinks = (
      <SplashLogoutButton />
    )
  }

  useEffect(() => {
    const images = [
      "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5554289/pexels-photo-5554289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4473905/pexels-photo-4473905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5702419/pexels-photo-5702419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7972316/pexels-photo-7972316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    count.current++
    let calc = count.current % 5
    let interval = setInterval(() => { setImage(images[calc]) }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [image])

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
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
      </div>
      <div className='splash-additional-content'>
        <p>Hello</p>
      </div>


    </div>
  )
}

export default SplashPage