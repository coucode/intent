import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateAStep, getAStep, deleteAStep, getAllSteps } from '../../store/step'
import './StepStyles/StepForms.css'


const EditStepForm = ({ category, topic, step, allSteps }) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [stepNumber, setStepNumber] = useState(step.stepNumber || '')
  const [summary, setSummary] = useState(step.summary || '')
  const [description, setDescription] = useState(step.description || '')
  const [stepCheck, setStepCheck] = useState('')
  const [success, setSuccess] = useState('')

  let numbers = allSteps.map(step => step.stepNumber)

  useEffect(() => {
    if (Number(step.stepNumber !== Number(stepNumber))) {
      if (numbers.includes(Number(stepNumber))) {
        setStepCheck(`Step number ${stepNumber} already exists`)
      } else {
        setStepCheck('')
      }
    }
  }, [stepNumber, step.stepNumber, numbers])



  const editStep = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    let payload = { id: step.id, topicId: topic.id, stepNumber, summary, description }
    if (!stepCheck.length) {
      let data = await dispatch(updateAStep(payload));
      if (Array.isArray(data)) {
        setErrors(data)
      } else {
        setSuccess('Sucessfully updated!')
        await dispatch(getAStep(step.id))
        setErrors('')
        setTimeout(() => setSuccess(''), 3000)
        await history.push(`/category/${category.id}/topics/${topic.id}/steps/edit`)

      }
    }
  }

  function charRemaining(max, input) {
    return Number(max) - Number(input.length)
  }

  const handleDeleteClick = async (e) => {
    await dispatch(deleteAStep(step.id))
    await dispatch(getAllSteps())
    await history.push(`/category/${category.id}/topics/${topic.id}/steps/edit`)
  }

  return (
    <div className='create-step-container'>
      {hasSubmitted && errors.length > 0 && (<div className='error-container'>
        {errors.map((error, ind) => (
          <div key={ind} className='error-text'>{error.split(":")[1]}</div>
        ))}
      </div>)}
      {hasSubmitted && success.length > 0 && (
        <p className='success-text'>
          Successfully Updated!
        </p>
      )}
      {stepCheck.length > 0 && (
        <p className='error-text'>
          {stepCheck}
        </p>
      )}

      <form onSubmit={editStep} className='create-step-form'>
        <p className='create-step-new-card-text'>Edit Step</p>

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
        <div className='step-edit-buttons'>
          <button type='submit' className='create-step-button'><i className="fa-solid fa-check fa-xl"></i></button>
          <button type='button' onClick={handleDeleteClick} className='delete-set-button'><i className="fa-solid fa-trash-can fa-xl"></i></button>

        </div>
      </form>
    </div>
  )

}

export default EditStepForm