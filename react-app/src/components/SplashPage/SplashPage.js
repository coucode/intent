import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import './SplashPage.css'

function SplashPage() {
  // const user = useSelector(state => state.session.user)

  // if (user){
  //   return <Redirect to="/" />
  // }

  return (
    <div>
      <h1>This is the Splash Page!</h1>
      <div>
        <LoginModal />
      </div>
      <div>
        <SignUpModal />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
}

export default SplashPage