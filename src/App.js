import React from 'react';
import './App.css';
import { Route,NavLink, Switch , Redirect} from 'react-router-dom';
import Users from './containers/Users/Users.js';
import Courses from './containers/Courses/Courses.js';
import Course from './containers/Course/Course.js';
function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{ listStyle:"none"}}>
          <li style={{ display:"inline-block", margin:"10px"}}><NavLink to = "/courses">Courses</NavLink></li>
          <li style={{ display:"inline-block", margin:"10px"}}><NavLink to = "/users">Users</NavLink> </li>
        </ul>
      </nav>
      <Switch>
      <Route path = "/users" component = {Users}/>
      <Route path = "/courses"  component = {Courses}/>
      {/* <Route path = "/courses/:courseId/:courseTitle" component = {Course}/> */}
      <Redirect from ="/all-courses" to="/courses"/>
      <Route render={()=> <h1>Not found.</h1>}/>
      </Switch>
    
     
    </div>
  );
}

export default App;