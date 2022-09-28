import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { getACategory, createACategory } from "../../../store/category"
import '../CategoryStyles/CategoryForms.css'

const CreateCategoryForm = ({ setShowModal }) => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  let images = ['arts', 'brain', 'chart', 'earth', 'flask',
    'gears', 'house', 'js', 'laptop', 'lightbulb',
    'python', 'react', 'shopping', 'spa', 'stairs', 'utensils']

  // Form Fields
  const [name, setName] = useState('')
  const [headline, setHeadline] = useState('')
  const [description, setDescription] = useState('')
  const [purpose, setPurpose] = useState('')
  const [isPrivate, setPrivate] = useState(false)
  const [icon, setIcon] = useState('')
  let ownerId = user.id

  const createCategory = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    let payload = { name, headline, description, purpose, isPrivate, icon, ownerId }
    if (!errors.length) {
      let data = await dispatch(createACategory(payload));
      if (Array.isArray(data)) {
        setErrors(data)
      } else {
        await dispatch(getACategory(data.id))
        await history.push(`/category/${data.id}`)
        await setShowModal(false)
      }
    }
  }

  function iconSelector(image) {
    setIcon(`/static/images/categories/${image}.svg`)
  }

  function activeIcon(image) {
    if (icon.includes(image)) {
      return 'active'
    } else {
      return 'inactive'
    }
  }
  function charRemaining(max, input) {
    return Number(max) - Number(input.length)
  }

  return (
    <div className='category-form-container'>
      <div className='cancel-button-container'>
        <i
          className="fa-solid fa-xmark fa-lg"
          onClick={() => setShowModal(false)}
        ></i>
      </div>
      <div className='category-form-header-container'>
        <h2 className='category-form-header'>Create Category</h2>
      </div>
      <form onSubmit={createCategory} className='category-form-inner-container'>
        {hasSubmitted && errors.length > 0 && (<div className='error-container'>
          {errors.map((error, ind) => (
            <div key={ind} className='error-text'>{error.split(":")[1]}</div>
          ))}
        </div>)}
        <div className='category-form-sections'>
          <label className='category-form-labels'>Category Name <p className='category-form-required-text'>* required</p></label>
          <input
            maxLength={100}
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your category name"
            className='category-form-inputs'
          >
          </input>
          <p className='category-form-char-remaining-text'>{charRemaining(100, name)} characters remaining</p>
        </div>
        <div className='category-form-sections'>
          <label className='category-form-labels'>Headline</label>
          <input
            maxLength={200}
            type='text'
            name='headline'
            onChange={(e) => setHeadline(e.target.value)}
            value={headline}
            placeholder="Headline for your category (Optional)"
            className='category-form-inputs'
          >
          </input>
          <p className='category-form-char-remaining-text'>{charRemaining(200, headline)} characters remaining</p>
        </div>
        <div className='category-form-sections'>
          <label className='category-form-labels'>Description</label>
          <input
            maxLength={1000}
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description for your category (Optional)"
            className='category-form-inputs'
          >
          </input>
          <p className='category-form-char-remaining-text'>{charRemaining(1000, description)} characters remaining</p>

        </div>
        <div className='category-form-sections'>
          <label className='category-form-labels'>Purpose</label>
          <input
            maxLength={100}
            type='text'
            name='purpose'
            onChange={(e) => setPurpose(e.target.value)}
            value={purpose}
            placeholder="Purpose for your category (Optional)"
            className='category-form-inputs'
          >
          </input>
          <p className='category-form-char-remaining-text'>{charRemaining(100, purpose)} characters remaining</p>

        </div>
        <div className='category-form-sections' id='category-private'>
          <label className='category-form-labels'>Is this Category private?</label>
          <div className='category-form-radio-container'>
            <input
              type='radio'
              name='privacy'
              value='yes'
              onClick={(e) => setPrivate(true)}
              >
            </input>
            <label className='category-form-radio-text'>Yes</label>
            <input
              type='radio'
              name='privacy'
              value='no'
              onClick={(e) => setPrivate(false)}
            >
            </input>
            <label className='category-form-radio-text'>No</label>
          </div>
        </div>
        <div className='category-form-sections'>
          <label className='category-form-labels'>Select an Icon</label>
          <div className='category-image-container'>
            {images.map(image => (
              <div key={image} className='category-inner-image-container'>
                <img
                  src={`/static/images/categories/${image}.svg`}
                  alt={image}
                  onClick={(e) => iconSelector(image)}
                  className="category-image-select"
                  id={activeIcon(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCategoryForm