import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSteps } from '../../store/step';
import EditStepForm from './EditStepForm';
import './StepStyles/StepForms.css'


function EditStepList({ category, topic }) {
  const dispatch = useDispatch()
  const allSteps = useSelector(state => state.steps)
  const [loaded, setLoaded] = useState(false)

  let stepArr;
  let filtered;

  useEffect(() => {
    dispatch(getAllSteps())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [stepArr])

  if (allSteps) {
    stepArr = Object.values(allSteps)
  }

  filtered = stepArr.filter(step => step.topicId === topic?.id)

  function compare(a, b) {
    return a.stepNumber - b.stepNumber
  }

  let sorted = filtered?.sort(compare)

  return loaded && sorted ? (
    <>
    <div className='available-steps'>
      {sorted.length} {Number(sorted.length) === 1 ? "step" : "steps"}
    </div>
      {
        sorted.map(step => {
          return (
            <div key={step.id}>
              <EditStepForm category={category} topic={topic} step={step} allSteps={sorted}/>
            </div>
          )
        })
      }
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default EditStepList