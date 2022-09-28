import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllTopics } from '../../store/topic';
import EditTopicFormModal from './EditTopicModal';


function TopicList({category}) {
  const dispatch = useDispatch()
  const allTopics = useSelector(state => state.topics)
  const [loaded, setLoaded] = useState(false)

  let topicArr;

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [topicArr])

  if (allTopics) {
    topicArr = Object.values(allTopics)
  }

  return loaded && topicArr ? (
    <div>
      {topicArr.map(topic => {
        return (
          <div >
            <NavLink to={`/topics/${topic.id}`} >
              {topic.name}
            </NavLink>
            <EditTopicFormModal category={category} topic={topic}/>
          </div>
        )
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default TopicList