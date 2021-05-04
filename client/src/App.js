import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Create from './pages/Create';
import EditInfo from './pages/EditInfo';
import NotFound from './pages/NotFound';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <AppContainer>
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/user' component={User} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/editinfo' component={EditInfo} />
            <Route exact={false} component={NotFound} />
          </Switch>
        </main>
      </Router>
    </AppContainer>
  );
}

export default App;
