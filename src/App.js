import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';

import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/navbar';
import Caripekerjaan from './pages/Caripekerjaan';

export const Context = createContext("hello world");

function App() {

  const [global, setGlobal] = useState([]);

  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Navbar />
          <Switch>
            <Context.Provider value={{ global, setGlobal }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/usersignup" component={Signup} />
              <Route exact path="/usersignin" component={Signin} />
              <Route exact path="/carikerja" component={Caripekerjaan} />
            </Context.Provider>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
