const GET_CATEGORIES = 'category/GET_CATEGORIES'
const GET_A_CATEGORY = 'category/GET_A_CATEGORY'
const CREATE_CATEGORY = 'category/CREATE_CATEGORY'
const UPDATE_CATEGORY = 'category/UPDATE_CATEGORY'
const DELETE_CATEGORY = 'category/DELETE_CATEGORY'


const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}
const getCategory = (category) => {
  return {
    type: GET_A_CATEGORY,
    category
  }
}
const createCategory = (category) => {
  return {
    type: CREATE_CATEGORY,
    category
  }
}
const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    category
  }
}
const deleteCategory = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    categoryId
  }
}

// Gets all of the Categories
export const getAllCategories = () => async (dispatch) => {
  const response = await fetch('/api/category/all')
  if (response.ok) {
    const categories = await response.json()
    dispatch(getCategories(categories))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Get one Category
export const getACategory = (id) => async (dispatch) => {
  const response = await fetch(`/api/category/${id}`)
  if (response.ok) {
    const category = await response.json()
    dispatch(getCategory(category))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Creates a new Category
export const createACategory = (payload) => async (dispatch) => {
  const response = await fetch(`/api/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const category = await response.json()
    dispatch(createCategory(category))
    return category
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Updates a Category
export const updateACategory = (payload) => async (dispatch) => {
  const response = await fetch(`/api/category/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const category = await response.json()
    dispatch(updateCategory(category))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Delete a Category
export const deleteACategory = (categoryId) => async (dispatch) => {
  const response = await fetch(`/api/category/${categoryId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    dispatch(deleteCategory(categoryId))
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

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const allCategories = {}
      action.categories.categories.forEach(category => {
        allCategories[category.id] = category
      })
      return { ...allCategories }
    case GET_A_CATEGORY:
      let oneCategory = { ...state }
      oneCategory[action.category.id] = action.category
      return oneCategory
    case CREATE_CATEGORY:
      return { ...state, [action.category.id]: action.category }
    case UPDATE_CATEGORY:
      return { ...state, [action.category.id]: action.category }
    case DELETE_CATEGORY:
      const deleteState = { ...state }
      delete deleteState[action.id]
      return deleteState
    default:
      return state;
  }
}

export default categoryReducer