import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { getAllCategories } from '../../store/category'
import CategoryListByUser from '../Categories/CategoryListByUser'
import CategoryFormModal from '../Categories/CategoryFormModal'

function NavBar({ setShowNav }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false)
  const categoryObj = useSelector(state => state.category)
  const categoryArr = Object.values(categoryObj)


  useEffect(() => {
    dispatch(getAllCategories)
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [categoryObj])

  let filtered;
  if (categoryArr) {
    filtered = categoryArr.filter(category => category.ownerId === user.id)
  }

  function imageCheck() {
    if (user.image) {
      return (
        <img
          src={user.image}
          alt="user"
          className='user-image'
          onError={e => { e.currentTarget.src = "/static/images/categories/user.svg" }} />
      )
    }
    else {
      return (
        <img src='/static/images/categories/user.svg' alt="user" className='user-image' />
      )
    }
  }

  return loaded && filtered ? (
    <div className='navbar'>
      <div className='navbar-upper'>
        <div className='navbar-upper-test'>
          <div className='navbar-top-container'>
            <NavLink to="/splashpage" className='navbar-logo-container'><i className="fa-solid fa-meteor fa-2xl"></i></NavLink>
            <div className='user-profile-container'>
              {/* <img src={user.image} alt="user" className='user-image' /> */}
              {imageCheck()}
              <div className='navbar-profile-text-container'>
                <p className='navbar-profile-text'>
                  {user.firstName} {user.lastName}
                </p>
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
          <div className='navbar-category-header-inner-container'>
            <p className='navbar-category-text'>My Categories</p>
            <p className='navbar-category-text' id='navbar-count'>({filtered.length})</p>
          </div>
        </div>
        <div className='navbar-category-list-container'>
          <CategoryListByUser categories={filtered} />
          <CategoryFormModal />
        </div>
      </div>
      <div className='navbar-lower'>
        <div className='splash-dev-text'>
          <p className='splash-dev-inner-text'>Developer:</p>
          <p className='splash-dev-inner-text' style={{ color: "var(--orange-button-color)", fontSize: '30px' }}>Cecilia Ou</p>
        </div>
        <div className='splash-links'>
          <a href="https://github.com/coucode" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github fa-2xl devLinks"></i>
          </a>
          <a href="https://www.linkedin.com/in/ceciliasou" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl devLinks"></i>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default NavBar
