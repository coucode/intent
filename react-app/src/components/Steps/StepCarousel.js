import { useEffect, useState } from 'react'
import './StepStyles/StepCarousel.css'

// This component showcases the steps within a topic in a carousel format. 
// Each card in the carousel shows the Step Number, Summary of the Step, and a description
// The Summary and Description fields are automatically hidden by a grey box that 
// is interactive and can be clicked by the user to reveal the information. 
// Hiding the information allows the user to try and recall the information first

function StepCarousel({ steps }) {
  // State Variables
  const [current, setCurrent] = useState(0)
  const [length, setLength] = useState(steps?.length)
  const [number, setNumber] = useState(1)
  const [summaryStyle, setSummaryStyle] = useState('#555')
  const [descStyle, setDescStyle] = useState('#555')

  // Stores the length of the available steps 
  useEffect(() => {
    setLength(steps.length)
  }, [steps])

  // This function sorts the steps within the array
  function compare(a, b) {
    return a.stepNumber - b.stepNumber
  }
  // Holds the sorted array.
  let sorted = steps.sort(compare)

  // The number variable holds the smallest step in the array. 
  // Relevant because not all step lists may start at 1
  // Users can make step lists with missing numbers by design
  useEffect(() => {
    setNumber(sorted[current]?.stepNumber)
  }, [sorted, current])

  // previous and next are used for buttons that allow the user to view the 
  // previous or next step from the current one
  const previous = () => {
    if (current > 0) {
      setCurrent(prevState => prevState - 1)
      setDescStyle('#555')
      setSummaryStyle('#555')
    }
  }

  const next = () => {
    if (current < (length - 1)) {
      setCurrent(prevState => prevState + 1)
      setDescStyle('#555')
      setSummaryStyle('#555')
    }
  }

  function hider(step) {
    if (step.stepNumber === number) {
      return 'contents'
    } else {
      return 'none'
    }
  }

  // Shows a message indicating to the user that the carousel is not available because there are no steps
  if (steps.length === 0){
    return (
      <div className='no-steps'>
        <h1>Whoops! </h1>
        <h1>Looks like this topic does not have steps.</h1>
        <h1>Click on Edit Steps above to add some steps!</h1>
        <i className="fa-solid fa-meteor fa-10x fa-beat-fade no-step-icon"></i>
      </div>
    )
  }

  return (
    <div className='sc-container'>
      Click on the grey block to reveal the answer!
      <div className='sc-wrapper'>
        {/* Shows the left arrow button to view the previous step only if the current number is greater than 0 */}
        {current > 0 && <button
          className='sc-left-arrow'
          onClick={previous}
        >
          <i className="fa-solid fa-angle-left fa-xl"></i>
        </button>}
        <div className='sc-content-container'>
          {/* Maps through the sorted array to showcase each step */}
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
                    <div className='sc-content-color-bar'></div>
                    <div className='sc-content-inner-container'>
                      <div className='sc-header-container'>
                        <h2 className='sc-headers'>Step Number</h2>
                      </div>
                      <div className='sc-inner-text-container'>
                        <p className='sc-inner-text'>{step.stepNumber}</p>
                      </div>

                      <div
                        className='sc-header-container'>
                        <h2 className='sc-headers'>Summary</h2>
                      </div>
                      {/* Ternary operators for summary and description update the CSS styling based on when the user clicks on the area */}
                      <div
                        className='sc-inner-text-container'
                        style={{ backgroundColor: `${summaryStyle}` }}
                        onClick={(e) => summaryStyle === '' ? setSummaryStyle("#555") : setSummaryStyle('')}
                      >
                        <p className='sc-inner-text'>{step.summary} </p>
                      </div>

                      <div className='sc-header-container'>
                        <h2 className='sc-headers'>Description</h2>
                      </div>
                      <div className='sc-inner-text-container'
                        id='sc-description'
                        style={{ backgroundColor: `${descStyle}` }}
                        onClick={(e) => descStyle === '' ? setDescStyle("#555") : setDescStyle('')}>
                        <p className='sc-inner-text'>{(step.description) ? step.description : "No Description Provided"}</p>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        {/* Shows or hides the next arrow depending on the current step number relative to total number of steps */}
        {current < (length - 1) && <button
          className='sc-right-arrow'
          onClick={next}
        >
          <i className="fa-solid fa-angle-right fa-xl"></i>
        </button>}
      </div>
    </div>
  )
}

export default StepCarousel