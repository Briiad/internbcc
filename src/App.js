import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

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
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/usersignup" component = {Signup} />
            <Route exact path = "/usersignin" component = {Signin} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
