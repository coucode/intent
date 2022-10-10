import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import './LandingPage.css'
import { Redirect, Route, Switch } from "react-router-dom";
import CategoryDetail from '../Categories/CategoryDetail'
import TopicDetail from '../Topics/TopicDetail'
import { getAllCategories } from "../../store/category";
import { getAllTopics } from "../../store/topic";
import LandingPageHome from "./LandingPageHome";

function LandingPage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const categoryObj = useSelector(state => state.category)
  const categoryArr = Object.values(categoryObj)
  const topicObj = useSelector(state => state.topics)
  const topicArr = Object.values(topicObj)
  const [showNav, setShowNav] = useState(true)


  if (!user) {
    <Redirect to="/" />
  }

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllTopics())
  }, [dispatch])

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
      <div className="landing-inner-container">
        <div className="landing-inner-left-container" style={{ display: showNav ? 'none' : 'flex' }}>
          <div className="navbar-open-button-container">
            {openNavButton()}
          </div>
        </div>
        <div className="landing-inner-right-container">
          <Switch>
            <Route exact path='/category/:categoryId'>
              <CategoryDetail categories={categoryArr} />
            </Route>
            <Route exact path='/category/:categoryId/about'>
              <CategoryDetail categories={categoryArr} />
            </Route>
            <Route exact path='/category/:categoryId/topics'>
              <CategoryDetail categories={categoryArr} />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id'>
              <TopicDetail categories={categoryArr} topics={topicArr} />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id/preview'>
              <TopicDetail categories={categoryArr} topics={topicArr} />
            </Route>
            <Route exact path='/category/:categoryId/topics/:id/steps/edit'>
              <TopicDetail categories={categoryArr} topics={topicArr} />
            </Route>
            <Route>
              <LandingPageHome />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default LandingPage