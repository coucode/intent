

function AboutIntent(){

  return (
    <div className='splash-about'>
      <div className='splash-content'>
        <div className='splash-header-container'>
          <h2 className='splash-headers'>How it works</h2>
        </div>
        <div className='splash-text-container'>
          <p className='splash-text'>
            Intent allows learners to commit steps of a procedure or task to memory.
            Intent is modeled after flashcards, but with the added functionality of
            sequence tracking.
            Through Intent, users are able to complete procedures and tasks more
            quickly and efficiently than alone.
          </p>
        </div>

        <div className='splash-header-container'>
          <h2 className='splash-headers'>Categories</h2>
        </div>
        <div className='splash-text-container'>
          <p className='splash-text'>
            Categories organize your procedures and tasks (known as topics) into a central location.
          </p>
        </div>

        <div className='splash-header-container'>
          <h2 className='splash-headers'>Topics</h2>
        </div>
        <div className='splash-text-container'>
          <p className='splash-text'>
            Topics are the individual procedures or tasks that you would like to commit to memory.
            We recommend thinking about topics as "How To's".
          </p>
        </div>


        <div className='splash-header-container'>
          <h2 className='splash-headers'>Steps</h2>
        </div>
        <div className='splash-text-container'>
          <p className='splash-text'>
            Topics contain steps. Steps are the series of actions required to complete a topic.
            Steps can be assigned a step number, a short summary, and a more in depth of
            description of the step in question.
          </p>
        </div>

      </div>
    </div>

  )

}

export default AboutIntent