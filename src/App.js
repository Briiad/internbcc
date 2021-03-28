import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';
import AuthRoute from './config/AuthRoute';
import PrivateRoute from './config/PrivateRoute';

import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/navbar';
import Caripekerjaan from './pages/Caripekerjaan';

export const Context = createContext("hello world");

function App() {

   const userData = JSON.parse(localStorage.getItem("userData"));

   const [global, setGlobal] = useState([]);
   const [user, setUser] = useState(userData);

   return (
      <div className="App">
         <Router>
            <Context.Provider value={{ global, setGlobal, user, setUser }}>
               <AnimatePresence exitBeforeEnter>
                  <Navbar />
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <AuthRoute exact path="/usersignup" component={Signup} />
                     <AuthRoute exact path="/usersignin" component={Signin} />
                     <PrivateRoute exact path="/carikerja" component={Caripekerjaan} />
                  </Switch>
               </AnimatePresence>
            </Context.Provider>
         </Router>
      </div>
   );
}

export default App;
