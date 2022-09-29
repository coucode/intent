import LogoutButton from '../auth/LogoutButton'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import './SplashPage.css'

function SplashPage() {
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