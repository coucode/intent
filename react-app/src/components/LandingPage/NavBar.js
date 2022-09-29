import './NavBar.css'

function NavBar({ setShowNav }) {

  return (
    <div className='navbar'>
      <div className='navbar-button-container'>
        <i
          className="fa-solid fa-angles-left"
          onClick={(e) => setShowNav(false)}
        ></i>

      </div>
      <h2>left nav bar</h2>
    </div>
  )
}

export default NavBar
