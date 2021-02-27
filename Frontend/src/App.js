import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/user_signup" component = {Signup} />
          <Route exact path = "/user_signin" component = {Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
