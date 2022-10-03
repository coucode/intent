import './LandingPageHome.css'

function LandingPageHome() {

  return (
    <div className='lph-container'>
      <div style={{ borderBottom: '8px solid #9fafc8' }}>
        <h2 style={{ color: 'var(--blue-accent-font-color)' }}>Welcome to Intent!</h2>
      </div>
      <div className='lph-content'>
        <div className='lph-header-container'>
          <h2 className='lph-headers'>How it works</h2>
        </div>
        <div className='lph-text-container'>
          <p className='lph-text'>
            Intent allows learners to commit steps of a procedure or task to memory. 
            Through Intent, users are able to complete procedures and tasks more 
            quickly and efficiently than alone.
          </p>
        </div>

        <div className='lph-header-container'>
          <h2 className='lph-headers'>Categories</h2>
        </div>
        <div className='lph-text-container'>
          <p className='lph-text'>
            Categories organize your procedures and tasks (known as topics) into a central location.
          </p>
        </div>



        <div className='lph-header-container'>
          <h2 className='lph-headers'>Topics</h2>
        </div>
        <div className='lph-text-container'>
          <p className='lph-text'>
            Topics are the individual procedures or tasks that you would like to commit to memory. 
            We recommend thinking about these as "How To's".
          </p>
        </div>



        <div className='lph-header-container'>
          <h2 className='lph-headers'>Steps</h2>
        </div>
        <div className='lph-text-container'>
          <p className='lph-text'>
            Topics contain steps. Steps are the series of actions required to complete a topic.
            Steps can be assigned a step number, a short summary, and a more in depth of 
            description of the step in question.
          </p>
        </div>




      </div>

    </div>
  )
}

export default LandingPageHome