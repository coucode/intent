import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllTopics } from '../../store/topic';
import TopicPlus from './CreateTopicModal/indexPlus';
import EditTopicFormModal from './EditTopicModal';
import './TopicStyles/TopicList.css'

// Returns a list of topics associated with a category.
function TopicList({ category }) {
  const dispatch = useDispatch()
  const allTopics = useSelector(state => state.topics)
  const [loaded, setLoaded] = useState(false)

  let topicArr;
  let filtered;

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [topicArr])

  if (allTopics) {
    topicArr = Object.values(allTopics)
  }

  filtered = topicArr.filter(topic => topic.categoryId === category.id)

  let topicListNav = (
    <div className='topic-list-nav'>
      <p className='topic-list-header'>Topics</p>
      <TopicPlus category={category} />
    </div>
  )

  return loaded && filtered ? (
    <div className='topic-list-container'>
      {topicListNav}
      {
        filtered.map(topic => {
          return (
            <div className='topic-list-item-container'>
              <NavLink to={`/category/${category.id}/topics/${topic.id}`} className="topic-list-item-text">
                {topic.name}
              </NavLink>
              <div className='topic-list-item-buttons'>
                <EditTopicFormModal category={category} topic={topic} />
                <p style={{margin:0}}>placeholder to add steps</p>
              </div>
            </div>
          )
        })
      }
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default TopicList