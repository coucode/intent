import { useEffect, useState } from 'react'
import './StepStyles/StepCarousel.css'

function StepCarousel({ steps }) {
  const [current, setCurrent] = useState(0)
  const [length, setLength] = useState(steps?.length)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setLength(steps.length)
  }, [steps])

  function compare(a, b) {
    return a.stepNumber - b.stepNumber
  }

  let sorted = steps.sort(compare)

  useEffect(() => {
    setNumber(sorted[current]?.stepNumber)
  }, [sorted, current])


  const previous = () => {
    if (current > 0) {
      setCurrent(prevState => prevState - 1)
    }
  }

  const next = () => {
    if (current < (length - 1)) {
      setCurrent(prevState => prevState + 1)
    }
  }

  function hider(step) {
    if (step.stepNumber === number) {
      return 'contents'
    } else {
      return 'none'
    }
  }

  return (
    <div className='sc-container'>
      UNDER CONSTRUCTION
      <div className='sc-wrapper'>
        <button
          className='sc-left-arrow'
          onClick={previous}
        >
          <i className="fa-solid fa-angle-left fa-xl"></i>
        </button>
        <div className='sc-content-container'>
          {
            sorted.map(step => {
              return (
                <div
                  key={step.stepNumber}
                  className='sc-content-card'
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                    display: hider(step)
                  }}
                >
                  <div className='sc-content'>
                    <p>Number: {step.stepNumber}</p>
                    <p>Summary: {step.summary} </p>
                    <p>Description: {step.description}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
        <button
          className='sc-right-arrow'
          onClick={next}
        >
          <i className="fa-solid fa-angle-right fa-xl"></i>
        </button>
      </div>
    </div>
  )
}

export default StepCarousel