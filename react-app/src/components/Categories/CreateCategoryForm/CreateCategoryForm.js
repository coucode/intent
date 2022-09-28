import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import { getACategory, createACategory } from "../../../store/category"

const CreateCategoryForm = ({setShowModal}) => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)


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

    let payload = {name, headline, description, purpose, isPrivate, icon, ownerId}
    if (!errors.length){
      let data = await dispatch(createACategory(payload));
      if (Array.isArray(data)){
        setErrors(data)
      } else {
        await dispatch(getACategory(data.id))
        await history.push(`/category/${data.id}`)
        await setShowModal(false)
      }
    }
  }

  return (
    <div>
      <form onSubmit={createCategory}>
        {hasSubmitted && errors.length > 0 && (<div className='errorContainer project-errors '>
          {errors.map((error, ind) => (
            <div key={ind} className='errorText'>{error.split(":")[1]}</div>
          ))}
        </div>)}
        <div>
          <label>Category Name</label>
          <input
            maxLength={100}
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your category name"
          >
          </input>
          <p>*</p>
        </div>
        <div>
          <label>Headline</label>
          <input
            maxLength={200}
            type='text'
            name='headline'
            onChange={(e) => setHeadline(e.target.value)}
            value={headline}
            placeholder="Headline for your category (Optional)"
          >
          </input>
        </div>
        <div>
          <label>Description</label>
          <input
            maxLength={1000}
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description for your category (Optional)"
          >
          </input>
        </div>
        <div>
          <label>Purpose</label>
          <input
            maxLength={100}
            type='text'
            name='purpose'
            onChange={(e) => setPurpose(e.target.value)}
            value={purpose}
            placeholder="Purpose for your category (Optional)"
          >
          </input>
        </div>
        <div>
          <label>Is this Category private?</label>
          <input
            type='checkbox'
            name='isPrivate'
            onChange={(e) => purpose ? setPrivate(false) : setPrivate(true)}
          >
          </input>
        </div>
        <div>
          <label>Icon Placeholder</label>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCategoryForm