import { useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import CategoryList from '../Categories/CategoryList'
import { NavLink } from 'react-router-dom'

function NavBar({ setShowNav }) {
  const user = useSelector(state => state.session.user)


  return (
    <div className='navbar'>
      <div>
        <div className='navbar-top-container'>
          <NavLink to="/splashpage" className='navbar-logo-container'><i className="fa-solid fa-meteor fa-2xl"></i></NavLink>
          <div className='user-profile-container'>
            <img src={user.image} alt="user" className='user-image' />
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div className='navbar-logout-container'>
            <LogoutButton />
          </div>
          <div className='navbar-button-container'>
            <i
              className="fa-solid fa-angles-left"
              onClick={(e) => setShowNav(false)}
            ></i>
          </div>
        </div>
      </div>
      <div className='navbar-category-header-container'>
        <p>My Categories</p>
      </div>

      <CategoryList />
    </div>
  )
}

export default NavBar
