import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAStep, getAStep } from '../../store/step'
import './StepStyles/StepForms.css'


const CreateStepForm = ({ category, topic, allSteps }) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [stepNumber, setStepNumber] = useState('')
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [stepCheck, setStepCheck] = useState('')

  let numbers = allSteps.map(step => step.stepNumber)

  useEffect(() => {
    if (numbers.includes(Number(stepNumber))) {
      setStepCheck(`Step number ${stepNumber} already exists`)
    } else {
      setStepCheck('')
    }
  }, [stepNumber])
  // Leaving numbers out of the dependency list resolves error of flashing error message after submit

  const createStep = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    let payload = { topicId: topic.id, stepNumber, summary, description }
    if (!stepCheck.length) {
      let data = await dispatch(createAStep(payload));
      if (Array.isArray(data)) {
        setErrors(data)
      } else {
        await dispatch(getAStep(data.id))
        setStepNumber('')
        setSummary('')
        setDescription('')
        setErrors('')
        setStepCheck('')
        setHasSubmitted(false)
        await history.push(`/category/${category.id}/topics/${topic.id}/steps/edit`)
      }
    }
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
      {stepCheck.length > 0 && (
        <p className='error-text'>
          {stepCheck}
        </p>
      )}
      <form onSubmit={createStep} className='create-step-form'>
        <p className='create-step-new-card-text'>New Step</p>

        <div className='create-step-input-container'>
          <input
            type='number'
            name='stepNumber'
            onChange={(e) => setStepNumber(e.target.value)}
            value={stepNumber}
            placeholder="Step number goes here"
            className='create-step-inputs-left'
            id='right-border'
          >
          </input>
          <p className='step-form-required-text'>* required</p>
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
          <div className='step-req-remain-container'>
            <p className='step-form-required-text'>* required</p>
            <p className='create-step-char-remaining' >{charRemaining(100, summary)} characters remain</p>
          </div>
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
          <p className='create-step-char-remaining'>{charRemaining(1000, description)} characters remain</p>
        </div>
        <button type='submit' className='create-step-button'><i className="fa-solid fa-check fa-xl"></i></button>

      </form>
    </div>
  )

}

export default CreateStepForm