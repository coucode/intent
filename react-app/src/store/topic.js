const GET_TOPICS = 'topics/GET_TOPICS'
const GET_A_TOPIC = 'topics/GET_A_TOPIC'
const CREATE_TOPIC = 'topics/CREATE_TOPIC'
const UPDATE_TOPIC = 'topics/UPDATE_TOPIC'
const DELETE_TOPIC = 'topics/DELETE_TOPIC'

const getTopics = (topics) => {
  return {
    type: GET_TOPICS,
    topics
  }
}
const getTopic= (topic) => {
  return {
    type: GET_A_TOPIC,
    topic
  }
}
const createTopic = (topic) => {
  return {
    type: CREATE_TOPIC,
    topic
  }
}
const updateTopic= (topic) => {
  return {
    type: UPDATE_TOPIC,
    topic
  }
}
const deleteTopic = (topicId) => {
  return {
    type: DELETE_TOPIC,
    topicId
  }
}

// Get all of the topics
export const getAllTopics = () => async (dispatch) => {
  const response = await fetch('/api/topics')
  if (response.ok) {
    const topics = await response.json()
    dispatch(getTopics(topics))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

// Get one Topic
export const getATopic = (id) => async (dispatch) => {
  const response = await fetch(`/api/topic/${id}`)
  if (response.ok) {
    const topic = await response.json()
    dispatch(getTopic(topic))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

const initialState = {}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      const allTopics = {}
      action.topics.topics.forEach(topic => {
        allTopics[topic.id] = topic
      })
      return { ...allTopics }
    case GET_A_TOPIC:
      let oneTopic = { ...state }
      oneTopic[action.topic.id] = action.topic
      return oneTopic
    case CREATE_TOPIC:
      return { ...state, [action.topic.id]: action.topic }
    case UPDATE_TOPIC:
      return { ...state, [action.topic.id]: action.topic }
    case DELETE_TOPIC:
      const deleteState = { ...state }
      delete deleteState[action.id]
      return deleteState
    default:
      return state;
  }
}


export default topicReducer