import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, NavLink, Switch, Route } from "react-router-dom"
import { deleteACategory, getACategory, getAllCategories } from "../../store/category"
import EditCategoryModal from './EditCategoryModal'
import TopicFormModal from "../Topics/CreateTopicModal"
import TopicList from "../Topics/TopicList"
import './CategoryStyles/CategoryDetail.css'

function CategoryDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const categoryObj = useSelector(state => state.category)
  const category = categoryObj[id]
  const [categoryLoaded, setCategoryLoaded] = useState(false)

  useEffect(() => {
    dispatch(getACategory(id))
  }, [dispatch, id])

  useEffect(() => {
    if (category) {
      setCategoryLoaded(true)
    }
  }, [category])

  if (!category) return null

  const handleDeleteClick = async (e) => {
    await dispatch(deleteACategory(id))
    await dispatch(getAllCategories())
    await history.push(`/category/all`)
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

  let about = (
    <div className="category-detail-about-container">
      <div className="category-detail-about-inner-left">
        <p>About Left Nav</p>
      </div>
      <div className="category-detail-about-inner-right">
        <h1>Test</h1>

      </div>
    </div>
  )

  return categoryLoaded && category ? (
    <>
      {overview}
      {categoryNav}
      {/* <h1>Category Detail</h1>
      <TopicFormModal category={category}/>
      <p>
        {category.name}
        {category.headline}
        {category.description}
        {category.purpose}
        {category.isPrivate}
        {category.ownerId}
      </p>
      <img src={category.icon} alt="category"/>
      <TopicList category={category} /> */}
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
    <h1>Loading...</h1>
  )
}

export default CategoryDetail