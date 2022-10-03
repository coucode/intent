import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSteps } from '../../store/step';
import StepCarousel from './StepCarousel';
import './StepStyles/StepCarousel.css'


function StepList({ category, topic }) {
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


  return loaded && filtered ? (
    <div className='sc-outer-container'>
      {/* {
        filtered.map(step => {
          return (
            <div key={step.id}>
              <p>Number: {step.stepNumber}</p>
              <p>Summary: {step.summary} </p>
              <p>Description: {step.description}</p>
            </div>
          )
        })
      } */}
      <StepCarousel steps={filtered}/>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default StepList