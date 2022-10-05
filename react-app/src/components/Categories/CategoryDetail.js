import { useEffect, useState, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, NavLink, Switch, Route } from "react-router-dom"
import { deleteACategory, getACategory, getAllCategories } from "../../store/category"
import EditCategoryModal from './EditCategoryModal'
import TopicList from "../Topics/TopicList"
import { NavContext } from "../../context/NavContext";
import './CategoryStyles/CategoryDetail.css'


function CategoryDetail({ categories }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { categoryId } = useParams()

  const user = useSelector(state => state.session.user)
  const categoryObj = useSelector(state => state.category)
  const category = categoryObj[categoryId]
  const [categoryLoaded, setCategoryLoaded] = useState(false)
  const [activeNav, setActiveNav] = useState('category-detail-headline')
  const [isOwner, setOwner] = useState(false)
  const context = useContext(NavContext)
  const { setCategoryIdContext } = context


  useEffect(() => {
    dispatch(getACategory(categoryId))
  }, [dispatch, categoryId])

  useEffect(() => {
    if (category) {
      setCategoryLoaded(true)
      if (Number(category.ownerId) === Number(user.id)) {
        setOwner(true)
      }
    }
  }, [category, user])

  useEffect(() => {
    setCategoryIdContext(categoryId)
  }, [categoryId, setCategoryIdContext])

  function redirect() {
    setTimeout(() => { history.push(`/`) }, 100)
    setCategoryIdContext(null)
  }

  let exists = false;
  categories.forEach((category) => {
    if (Number(category.id) === Number(categoryId)) {
      exists = true;
    } else {
      exists = 'checked'
    }
  })

  if (categoryLoaded === true && isOwner === false) {
    return (
      <div>
        <h1>This Category does not exist...redirecting</h1>
        {redirect()}
      </div>
    )
  }

  if (!category && exists === 'checked') {
    return (
      <div>
        <h1>This Category does not exist...redirecting</h1>
        {redirect()}
      </div>
    )
  }

  if (!category) {
    return null
  }


  const handleDeleteClick = async (e) => {
    await dispatch(deleteACategory(categoryId))
    await dispatch(getAllCategories())
    await history.push(`/`)
  }

  let overview = (
    <div className="category-detail-overview-container">
      <div className="category-detail-overview-icon-container">
        <img src={category?.icon} alt="category icon" className="category-detail-icon" />
      </div>
      <div className="category-detail-overview-info">
        <p id="category-name-text">{category?.name}</p>
        <div className="category-detail-overview-buttons">
          <EditCategoryModal category={category} />
          <button onClick={handleDeleteClick} className='delete-category-button'>Delete</button>
        </div>
      </div>
    </div>
  )

  let categoryNav = (
    <nav className="category-detail-nav">
      <div className="category-nav-tabs-container">
        <NavLink to={`/category/${category.id}/about`} className="category-nav-tabs">About</NavLink>
      </div>
      <div className="category-nav-tabs-container">
        <NavLink to={`/category/${category.id}/topics`} className="category-nav-tabs">Topics</NavLink>
      </div>
    </nav>
  )

  function isActive(link) {
    if (activeNav.includes(link)) {
      return 'active'
    } else {
      return 'inactive'
    }
  }

  let about = (
    <div className="category-detail-about-container">
      <div className="category-detail-about-inner-left">
        <div className="category-detail-about-inner-left-navbar">
          <div
            className="about-inner-left-navbar-link-container"

            id={isActive('headline')}>
            <a
              href="#category-detail-headline"
              className="about-inner-left-navbar-text"
              onClick={(e) => setActiveNav('category-detail-headline')}
            >Headline</a>
          </div>
          <div
            className="about-inner-left-navbar-link-container"
            id={isActive('description')}>
            <a
              href="#category-detail-description"
              className="about-inner-left-navbar-text"
              onClick={(e) => setActiveNav('category-detail-description')}
            >Description</a>
          </div>
          <div
            className="about-inner-left-navbar-link-container"
            id={isActive('purpose')}>
            <a
              href="#category-detail-purpose"
              className="about-inner-left-navbar-text"
              onClick={(e) => setActiveNav('category-detail-purpose')}
            >Purpose</a>
          </div>
        </div>
      </div>
      <div className="category-detail-about-inner-right">
        <div className="category-detail-header-containers">
          <h3 id='category-detail-headline'>Headline</h3>
        </div>
        <p className="category-detail-inner-text">{(category.headline)? category.headline : "No headline provided"}</p>

        <div className="category-detail-header-containers">
          <h3 id='category-detail-description'>Description</h3>
        </div>
        <p className="category-detail-inner-text" >{category.description ? category.description : "No description provided"}</p>

        <div className="category-detail-header-containers">
          <h3 id='category-detail-purpose'>Purpose</h3>
        </div>
        <p className="category-detail-inner-text">{category.purpose ? category.purpose : "No purpose provided"}</p>
      </div>

    </div>
  )

  return categoryLoaded && category ? (
    <>
      {overview}
      {categoryNav}
      <div className="category-detail-inner-content">
        <Switch>
          <Route exact path={`/category/${category.id}/about`}>
            {about}
          </Route>
          <Route exact path={`/category/${category.id}/topics`}>
            <TopicList category={category} />
          </Route>
        </Switch>
      </div>
    </>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}

export default CategoryDetail