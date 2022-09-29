import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import './LandingPage.css'
import { Redirect, Route, Switch } from "react-router-dom";
import CategoryDetail from '../Categories/CategoryDetail'

function LandingPage() {
  const user = useSelector(state => state.session.user)
  const [showNav, setShowNav] = useState(true)

  if (!user){
    <Redirect to="/" />
  }

  function openNavButton() {
    if (showNav) {
    } else {
      return (
        <i
          className="fa-solid fa-angles-right"
          onClick={(e) => setShowNav(true)}
        ></i>
      )
    }
  }

  return (
    <div className="landing-container">
      <div className="nav-bar-display" style={{ display: showNav ? 'flex' : 'none' }}>
        <NavBar setShowNav={setShowNav} />
      </div>
      <div>
        {openNavButton()}
        <h1>This is the Landing Page!</h1>
        <Switch>
          <Route exact path='/category/:id'>
            <CategoryDetail />
          </Route>
        </Switch>

      </div>
    </div>
  )
}

export default LandingPage