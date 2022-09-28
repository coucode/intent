import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import SplashPage from './components/SplashPage/SplashPage';

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
        <SplashPage />
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
        <Route exact path='/login'>
          {/* <LoginPage /> */}
        </Route>
        <Route exact path='/signup'>
          {/* <SignUpPage /> */}
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;