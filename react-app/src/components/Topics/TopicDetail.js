import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, NavLink, Route, Switch } from "react-router-dom"
import { getACategory } from "../../store/category"
import { deleteATopic, getAllTopics, getATopic } from "../../store/topic"
import CreateStepForm from "../Steps/CreateStepForm"
import EditStepList from "../Steps/EditStepList"
import StepList from "../Steps/StepList"
import EditTopicFormModal from "./EditTopicModal"
import './TopicStyles/TopicDetail.css'

function TopicDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { categoryId, id } = useParams()
  const categoryObj = useSelector(state => state.category)
  const category = categoryObj[categoryId]
  const topicObj = useSelector(state => state.topics)
  const topic = topicObj[id]
  const [topicLoaded, setTopicLoaded] = useState(false)

  useEffect(() => {
    dispatch(getACategory(categoryId))
    dispatch(getATopic(id))
  }, [dispatch, categoryId, id])

  useEffect(() => {
    if (topic) {
      setTopicLoaded(true)
    }
  }, [topic])



  if (!topic) return null
  if (!category) return null

  const handleDeleteClick = async (e) => {
    await dispatch(deleteATopic(id))
    await dispatch(getAllTopics())
    await history.push(`/category/${category.id}/topics`)
  }

  let overview = (
    <div className="topic-detail-overview-container">
      <div>
        <NavLink to={`/category/${category?.id}`} className="topic-detail-category-link">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="topic-category-detail-icon-container">
            <img src={category?.icon} alt="category icon" className="topic-category-detail-icon" />
          </div>
          <p id="topic-category-name-text">{category?.name}</p>
        </NavLink>
      </div>
      <div>
        <p className="topic-detail-name">{topic?.name}</p>
      </div>
      <div>
        <EditTopicFormModal category={category} topic={topic} />
        <button onClick={handleDeleteClick} className='delete-topic-button'>Delete</button>
      </div>
    </div>
  )

  let topicNav = (
    <nav className="topic-detail-nav">
      <div className="topic-nav-tabs-container">
        <NavLink to={`/category/${category.id}/topics/${topic.id}/preview`} className="topic-nav-tabs">Preview Steps</NavLink>
      </div>
      <div className="topic-nav-tabs-container">
        <NavLink to={`/category/${category.id}/topics/${topic.id}/steps/edit`} className="topic-nav-tabs">Edit Steps</NavLink>
      </div>
    </nav>
  )

  return topicLoaded && topic && category ? (
    <>
      {overview}
      {topicNav}
      <div className="topic-detail-inner-content">
        <Switch>
          <Route exact path={`/category/${category.id}/topics/${topic.id}/preview`}>
            <StepList category={category} topic={topic} />
          </Route>
          <Route exact path={`/category/${category.id}/topics/${topic.id}/steps/edit`}>
            <div className="create-step-form-container">
              <p className="step-form-header">Create a Step</p>
              <CreateStepForm category={category} topic={topic} />
            </div>
            <div className="edit-step-form-container">
              <p className="step-form-header">Edit Step(s)</p>
              <EditStepList category={category} topic={topic} />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default TopicDetail