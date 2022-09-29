import { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import './LandingPage.css'
import { Redirect, Route, Switch } from "react-router-dom";
import CategoryDetail from '../Categories/CategoryDetail'
import TopicDetail from '../Topics/TopicDetail'

function LandingPage() {
  const user = useSelector(state => state.session.user)
  const [showNav, setShowNav] = useState(true)

  if (!user) {
    <Redirect to="/" />
  }

  function openNavButton() {
    if (showNav) {
    } else {
      return (
        <i
          className="fa-solid fa-angles-right"
          onClick={(e) => setShowNav(true) }
        ></i>
      )
    }
  }

  return (
    <div className="landing-container">
      <div className="nav-bar-display" style={{ display: showNav ? 'flex' : 'none' }}>
        <NavBar setShowNav={setShowNav} />
      </div>
      <div className="landing-inner-container">
        <div className="landing-inner-left-container" style={{ display: showNav ? 'none' : 'flex' }}>
          <div className="navbar-open-button-container">
            {openNavButton()}
          </div>
        </div>
        <div className="landing-inner-right-container">
          <Switch>
            <Route exact path='/category/:id'>
              <CategoryDetail />
            </Route>
            <Route exact path='/category/:id/about'>
              <CategoryDetail />
            </Route>
            <Route exact path='/category/:id/topics'>
              <CategoryDetail />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id'>
              <TopicDetail />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id/preview'>
              <TopicDetail />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id/steps/edit'>
              <TopicDetail />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default LandingPage