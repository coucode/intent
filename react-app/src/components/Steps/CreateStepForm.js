import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAStep, getAStep } from '../../store/step'
import './StepStyles/StepForms.css'


const CreateStepForm = ({ category, topic }) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [stepNumber, setStepNumber] = useState('')
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')

  const createStep = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    let payload = { topicId: topic.id, stepNumber, summary, description }
    // if (!errors.length) {
    let data = await dispatch(createAStep(payload));
    if (Array.isArray(data)) {
      setErrors(data)
    } else {
      await dispatch(getAStep(data.id))
      setStepNumber('')
      setSummary('')
      setDescription('')
      setErrors('')
      await history.push(`/category/${category.id}/topics/${topic.id}/steps/edit`)
    }
    // }
  }

  function charRemaining(max, input) {
    return Number(max) - Number(input.length)
  }

  return (
    <div className='create-step-container'>
      {hasSubmitted && errors.length > 0 && (<div className='error-container'>
        {errors.map((error, ind) => (
          <div key={ind} className='error-text'>{error.split(":")[1]}</div>
        ))}
      </div>)}
      <form onSubmit={createStep} className='create-step-form'>
        <p className='create-step-new-card-text'>New Step</p>

        <div className='create-step-input-container'>
          <input
            maxLength={100}
            type='number'
            name='stepNumber'
            onChange={(e) => setStepNumber(e.target.value)}
            value={stepNumber}
            placeholder="1"
            className='create-step-inputs-left'
            id='right-border'
          >
          </input>
          <p className='step-form-required-text'>*</p>
        </div>
        <div className='create-step-input-container'>
          <textarea
            maxLength={100}
            type='text'
            name='summary'
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            placeholder="Summary of the step"
            className='create-step-inputs'
            id='right-border'
          >
          </textarea>
          <p className='step-form-required-text'>*</p>
          <p className='create-step-char-remaining' id="dual">{charRemaining(100, summary)} characters remaining</p>
        </div>
        <div className='create-step-input-container'>
          <textarea
            maxLength={1000}
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description of the step (Optional)"
            className='create-step-inputs-right'
          >
          </textarea>
          <p className='create-step-char-remaining'>{charRemaining(1000, description)} characters remaining</p>
        </div>
        <button type='submit' className='create-step-button'><i className="fa-solid fa-check fa-xl"></i></button>

      </form>
    </div>
  )

}

export default CreateStepForm