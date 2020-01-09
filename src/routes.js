import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Login from './Views/Auth/SignIn/SignIn';
import Dashboard from './Views/Dashboard/Dashboard';
import Checklist from './Views/Checklist/Checklist';
import Navbar from './Views/Navbar/Navbar';
import SideBar from './Views/Sidebar/Sidebar';
import Budgeter from './Views/Budgeter/Budgeter';
import Qoutes from './Views/Qoutes/Qoutes';
import SUbContractors from './Views/SubContractors/SubContractors';
const customHistory = createBrowserHistory();

const type = localStorage.getItem('loggedIn'); //update when user logs in;

function CustomRoutes(props) {
  console.log(props)
  const routes =()=>{
    return(
      <>
      <Route exact path="/dashboard" component={Dashboard} />   
  <Route exact path="/checklist" component={Checklist} />
  <Route exact path="/budgeter" component={Budgeter} />
  <Route exact path="/qoutes" component={Qoutes} />
  <Route exact path="/sub-contractors" component={SUbContractors} />
  </>
    )
  }
  
  const routestoRender =()=> {
    if (type) {
      return (
        <>
          <body>   
        <header>
            <Navbar />
        </header>
        <div class="row position-relative custom-bg-gray89">
        <SideBar routes={props} />
        <main class="col ml-2 mt-2 mb-3 mr-0 p-0 rounded-lg">
          {routes()}
          </main>
        
        </div>
          
        </body>      
          </>
      );
    } else {
       return <Redirect to="/" />;
    }
  }

  return (
    <Router history={customHistory}>
      <Route exact path="/" component={Login} />
      {routestoRender()}
    </Router>
  );
}

export default CustomRoutes;
