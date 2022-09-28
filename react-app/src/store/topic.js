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