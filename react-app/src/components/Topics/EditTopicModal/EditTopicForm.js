import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { updateATopic, getATopic } from '../../../store/topic';
import '../TopicStyles/TopicForms.css'


const EditTopicForm = ({setShowModal, category, topic}) => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [buttonChange, setButtonChange] = useState('category-submit-button-disabled')

  const [name, setName] = useState(topic.name || '')

  useEffect(() => {
    if (name.length > 0) {
      setButtonChange('topic-submit-button')
    }
    if (name.length === 0) {
      setButtonChange('topic-submit-button-disabled')
    }
  }, [name])

  const createTopic = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    let payload = { name, categoryId: topic.categoryId, ownerId: user.id, id: topic.id}
    // if (!errors.length) {
      let data = await dispatch(updateATopic(payload));
      if (Array.isArray(data)) {
        setErrors(data)
      } else {
        await dispatch(getATopic(topic.id))
        await history.push(`/category/${category.id}/topics/${topic.id}/preview`)
        await setShowModal(false)
      }
    // }
  }
  function charRemaining(max, input) {
    return Number(max) - Number(input.length)
  }

  return (
    <div className='topic-form-container'>
      <div className='cancel-button-container'>
        <i
          className="fa-solid fa-xmark fa-lg"
          onClick={() => setShowModal(false)}
        ></i>
      </div>
      <div className='topic-form-header-container'>
        <h2 className='topic-form-header'>Edit Topic</h2>
      </div>
      <form onSubmit={createTopic} className='topic-form-inner-container'>
        {hasSubmitted && errors.length > 0 && (<div className='error-container'>
          {errors.map((error, ind) => (
            <div key={ind} className='error-text'>{error.split(":")[1]}</div>
          ))}
        </div>)}
        <div className='topic-form-sections'>
          <label className='topic-form-labels'>Topic Name <p className='topic-form-required-text'>*</p></label>
          <input
            maxLength={100}
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="How To - Do The Thing"
            className='topic-form-inputs'
          >
          </input>
          <p className='topic-form-char-remaining-text'>{charRemaining(100, name)} characters remaining</p>
        </div>
        <div className='topic-form-button-container'> 
          <button type='submit' className={`${buttonChange}`}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditTopicForm