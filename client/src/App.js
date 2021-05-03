import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Me from './pages/Me';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <AppContainer>
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/me' component={Me} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact={false} component={NotFound} />
          </Switch>
        </main>
      </Router>
    </AppContainer>
  );
}

export default App;
