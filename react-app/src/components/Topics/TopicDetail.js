import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { deleteATopic, getAllTopics, getATopic } from "../../store/topic"

function TopicDetail(){
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const topicObj = useSelector(state => state.topics)
  const topic = topicObj[id]
  const [topicLoaded, setTopicLoaded] = useState(false)

  useEffect(() => {
    dispatch(getATopic(id))
  }, [dispatch, id])

  useEffect(() => {
    if (topic) {
      setTopicLoaded(true)
    }
  }, [topic])

  if (!topic) return null

  const handleDeleteClick = async(e) => {
    await dispatch(deleteATopic(id))
    await dispatch(getAllTopics())
    await history.push(`/topics`)
  }

  return topicLoaded && topic ? (
    <div>
      <h1>Topic Detail</h1>
      <button onClick={handleDeleteClick}>Delete Topic</button>
      <p>
        {topic.name}
      </p>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default TopicDetail