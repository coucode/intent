import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, NavLink } from "react-router-dom"
import { getACategory } from "../../store/category"
import { deleteATopic, getAllTopics, getATopic } from "../../store/topic"
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

  const handleDeleteClick = async (e) => {
    await dispatch(deleteATopic(id))
    await dispatch(getAllTopics())
    await history.push(`/topics`)
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
    </div>
  )

  let topicNav = (
    <nav className="topic-detail-nav">
      <div className="topic-nav-tabs-container">
        <NavLink to={`/category/${category.id}/topics/${topic.id}/steps`} className="topic-nav-tabs">Preview Steps</NavLink>
      </div>
      <div className="topic-nav-tabs-container">
        <NavLink to={`/category/${category.id}/topics/${topic.id}/steps/edit`} className="topic-nav-tabs">Edit Steps</NavLink>
      </div>
    </nav>
  )

  return topicLoaded && topic ? (
    <>
      {overview}
      {topicNav}
      {/* <h1>Topic Detail</h1>
      <EditTopicFormModal topic={topic} />
      <button onClick={handleDeleteClick}>Delete Topic</button>
      <p>
        {topic.name}
      </p> */}
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default TopicDetail