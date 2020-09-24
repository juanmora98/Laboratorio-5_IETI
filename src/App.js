import React from 'react';
import { Login } from './components/loginComponent/Login';
import { User } from './components/userComponent/User';
import { NewTask } from './components/NewTask';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Registration } from './components/Registration component/Registration';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route path="/user" component={UserView} />
            <Route path="/NewTask" component={TaskView} />
            <Route path="/Registration" component={RegistView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const TaskView = () => (
  <div>
    <NewTask />
  </div>
);

const UserView = () => (
  <div>
    <User />
  </div>
);


const RegistView = () => (
  <div>
    <Registration />
  </div>
);

export default App;
