import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import SplashPage from './components/SplashPage/SplashPage';
import LandingPage from './components/LandingPage/LandingPage';
import { NavContextProvider } from "./context/NavContext"


function App() {
  const [currentUserIsLoaded, setCurrentUserIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setCurrentUserIsLoaded(true);
    })();
  }, [dispatch]);

  if (!currentUserIsLoaded) return null;

  const Home = () => {
    if (currentUser) {
      return (
        <NavContextProvider>
          <LandingPage />
        </NavContextProvider>
      )
    } else {
      return (
        <>
          <SplashPage />
        </>
      )
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/splashpage' exact={true}>
          <SplashPage />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;