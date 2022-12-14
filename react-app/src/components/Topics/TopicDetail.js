import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, NavLink, Route, Switch } from "react-router-dom"
import { getACategory } from "../../store/category"
import { deleteATopic, getATopic } from "../../store/topic"
import { getAllSteps } from '../../store/step';

import CreateStepForm from "../Steps/CreateStepForm"
import EditStepList from "../Steps/EditStepList"
import StepList from "../Steps/StepList"
import EditTopicFormModal from "./EditTopicModal"
import './TopicStyles/TopicDetail.css'

function TopicDetail({categories, topics}) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { categoryId, id } = useParams()
  const user = useSelector(state => state.session.user)
  const categoryObj = useSelector(state => state.category)
  const topicObj = useSelector(state => state.topics)
  const allSteps = useSelector(state => state.steps)
  
  const category = categoryObj[categoryId]
  const topic = topicObj[id]
  const [categoryLoaded, setCategoryLoaded] = useState(false)
  const [topicLoaded, setTopicLoaded] = useState(false)
  const [isOwner, setOwner] = useState(false)

  let stepArr;
  let filtered;


  useEffect(() => {
    dispatch(getACategory(categoryId))
    dispatch(getATopic(id))
    dispatch(getAllSteps())

  }, [dispatch, categoryId, id])

  useEffect(() => {
    if (category) {
      setCategoryLoaded(true)
      if (Number(category.ownerId) === Number(user.id)) {
        setOwner(true)
      }
    }
  }, [category, user])

  useEffect(() => {
    if (topic) {
      setTopicLoaded(true)
      if (Number(topic.ownerId) === Number(user.id)) {
        setOwner(true)
      }
    }
  }, [topic, user])

  if (allSteps) {
    stepArr = Object.values(allSteps)
  }

  filtered = stepArr.filter(step => step.topicId === topic?.id)
  function compare(a, b) {
    return a.stepNumber - b.stepNumber
  }

  let sorted = filtered?.sort(compare)

  function redirect() {
    setTimeout(() => { history.push(`/`) }, 1000)
  }

  let categoryExists = false;
  categories.forEach((category) => {
    if (Number(category.id) === Number(categoryId)) {
      categoryExists = true;
    } else {
      categoryExists = 'checked'
    }
  })

  let exists = false;

  topics.forEach(topic => {
    if (Number(topic.id) === Number(id)) {
      exists = true;
    } else {
      exists = 'checked'
    }
  })

  if (categoryLoaded === true && isOwner === false) {
    return (
      <div className="redirect-container">
        <h1>This resource does not exist...redirecting</h1>
        <i className="fa-solid fa-satellite fa-10x fa-beat-fade redirect-icon"></i>
        {redirect()}
      </div>
    )
  }

  if (!category && categoryExists === 'checked') {
    return (
      <div className="redirect-container">
        <h1>This resource does not exist...redirecting</h1>
        <i className="fa-solid fa-satellite fa-10x fa-beat-fade redirect-icon"></i>
        {redirect()}
      </div>
    )
  }



  if (topicLoaded === true && isOwner === false) {
    return (
      <div className="redirect-container">
        <h1>This Topic does not exist...redirecting</h1>
        <i className="fa-solid fa-satellite fa-10x fa-beat-fade redirect-icon"></i>
        {redirect()}
      </div>
    )
  }

  if (!topic && exists === 'checked') {
    return (
      <div className="redirect-container">
        <h1>This Topic does not exist...redirecting</h1>
        <i className="fa-solid fa-satellite fa-10x fa-beat-fade redirect-icon"></i>
        {redirect()}
      </div>
    )
  }

  if (topic && category){
    if (topic.categoryId !== category.id){
      return(
        <div className="redirect-container">
          <h1>This Topic does not exist...redirecting</h1>
          <i className="fa-solid fa-satellite fa-10x fa-beat-fade redirect-icon"></i>
          {redirect()}
        </div>
      )
    }
  }

  if (!topic) return null
  if (!category) return null

  const handleDeleteClick = async (e) => {
    await dispatch(deleteATopic(id))
    // await dispatch(getAllTopics())
    await history.push(`/category/${category.id}/topics`)
  }

  let overview = (
    <div className="topic-detail-overview-container">
      <div className="topic-detail-category-container">
        <NavLink to={`/category/${category?.id}/about`} className="topic-detail-category-link">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="topic-category-detail-icon-container">
            <img src={category?.icon} alt="category icon" className="topic-category-detail-icon" />
          </div>
          <p id="topic-category-name-text">{category?.name}</p>
        </NavLink>
      </div>
      <div className="topic-detail-name-container">
        <p className="topic-detail-name">{topic?.name}</p>
      </div>
      <div className="topic-detail-buttons-container">
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
            <div className="edit-steps-instructions">
              What you need to know about making steps:
              <ul>
                <li>A topic can have a maximum of 25 steps</li>
                <li>Intent WILL check for duplicate step numbers</li>
                <li>Intent WILL NOT check for missing step numbers (giving you the flexibility to skip a step and revisit adding it later!)</li>
              </ul>
            </div>
            <div className="create-step-form-container">
              <p className="step-form-header">Create a Step</p>
              <CreateStepForm category={category} topic={topic} allSteps={sorted} />
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