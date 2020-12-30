import logo from './logo.svg';

import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 


import Home from './stepapp/Home';
import './App.css';
import Login from './stepapp/Login';
import Select from './stepapp/Select';
import Demo from './stepapp/Demo';
import Topics from './stepapp/Topics';
import demoapi from './stepapp/demoapi';


function App() {
  return (
          <Router> 
                
              <div className="App"> 
                {/*<ul> 
                    <li> 
                      <Link to="/">Home</Link> 
                    </li> 
                    <li> 
                      <Link to="/about">About Us</Link> 
                    </li> 
                    <li> 
                      <Link to="/contact">Contact Us</Link> 
                    </li> 
  </ul> */}
  <Switch> 
                  <Route exact path='/' component={Home}></Route> 
                  <Route exact path='/login' component={Login}></Route> 
                  <Route exact path='/select' component={Select}></Route>
                  <Route exact path='/demo' component={Demo}></Route>
                  <Route exact path='/topics' component={Topics}></Route>
                  <Route exact path='/demoapi' component={demoapi}></Route>
                  {/*<Route exact path='/about' component={About}></Route> 
                  <Route exact path='/contact' component={Contact}></Route> */}
                </Switch>
              </div> 
          </Router>
  );
}

export default App;
