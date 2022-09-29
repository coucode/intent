const GET_STEPS = 'category/GET_STEPS'
const GET_A_STEP = 'category/GET_A_STEP'
const CREATE_STEP = 'category/CREATE_STEP'
const UPDATE_STEP = 'category/UPDATE_STEP'
const DELETE_STEP = 'category/DELETE_STEP'


const getSteps = (steps) => {
  return {
    type: GET_STEPS,
    steps
  }
}
const getStep = (step) => {
  return {
    type: GET_A_STEP,
    step
  }
}
const createStep = (step) => {
  return {
    type: CREATE_STEP,
    step
  }
}
const updateStep = (step) => {
  return {
    type: UPDATE_STEP,
    step
  }
}
const deleteStep = (stepId) => {
  return {
    type: DELETE_STEP,
    stepId
  }
}

// Gets all of the steps
export const getAllSteps = () => async (dispatch) => {
  const response = await fetch('/api/steps/all')
  if (response.ok) {
    const steps = await response.json()
    dispatch(getSteps(steps))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

// Get one step
export const getAStep = (id) => async (dispatch) => {
  const response = await fetch(`/api/steps/${id}`)
  if (response.ok) {
    const step = await response.json()
    dispatch(getStep(step))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

// Creates a new step
export const createAStep = (payload) => async (dispatch) => {
  const response = await fetch(`/api/steps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const step = await response.json()
    dispatch(createStep(step))
    return step
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Updates a step
export const updateAStep = (payload) => async (dispatch) => {
  const response = await fetch(`/api/steps/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const step = await response.json()
    dispatch(updateStep(step))
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
// Delete a step
export const deleteAStep = (stepId) => async (dispatch) => {
  const response = await fetch(`/api/steps/${stepId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    dispatch(deleteStep(stepId))
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

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STEPS:
      const allSteps = {}
      action.steps.steps.forEach(step => {
        allSteps[step.id] = step
      })
      return { ...allSteps }
    case GET_A_STEP:
      let oneStep = { ...state }
      oneStep[action.step.id] = action.step
      return oneStep
    case CREATE_STEP:
      return { ...state, [action.step.id]: action.step }
    case UPDATE_STEP:
      return { ...state, [action.step.id]: action.step }
    case DELETE_STEP:
      const deleteState = { ...state }
      delete deleteState[action.id]
      return deleteState
    default:
      return state;
  }
}

export default stepReducer