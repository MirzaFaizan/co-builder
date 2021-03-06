import React, { useContext } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Login from './Views/Auth/SignIn/SignIn';
import Dashboard from './Views/Dashboard/Dashboard';
import Checklist from './Views/Checklist/Checklist';
import Navbar from './Views/Navbar/Navbar';
import SideBar from './Views/Sidebar/Sidebar';
import Budgeter from './Views/Budgeter/Budgeter';
import Qoutes from './Views/Qoutes/Qoutes';
import SubContractors from './Views/SubContractors/SubContractors';
import PintrestBoard from './Views/PintrestBoard/PintrestBoard';
import Documents from './Views/Documents/Documents';
import Timeline from './Views/Timeline/Timeline';
import ProgressPhotos from './Views/ProgressPhotos/ProgressPhotos';
import UpComingMeetings from './Views/UpcomingMeetings/UpcomingMeetings';
import Suppliers from './Views/Suppliers/Suppliers';
import Phases from './Views/Phases/Phases';
import Drift from 'react-driftjs';
import { InfoContext } from "./Context/AuthContext";

const customHistory = createBrowserHistory();

const type = localStorage.getItem('token'); //update when user logs in;

function CustomRoutes(props) {
  const { info } = useContext(InfoContext);
  const routes = () => {
    return (
      <>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/checklist" component={Checklist} />
        <Route exact path="/budgeter" component={Budgeter} />
        <Route exact path="/qoutes" component={Qoutes} />
        <Route exact path="/sub-contractors" component={SubContractors} />
        <Route exact path="/pinterest-board" component={PintrestBoard} />
        <Route exact path="/documents" component={Documents} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/progress-photos" component={ProgressPhotos} />
        <Route exact path="/upcomming-meetings" component={UpComingMeetings} />
        <Route exact path="/suppliers" component={Suppliers} />
        <Route exact path="/phases" component={Phases} />

      </>
    )
  }

  const routestoRender = () => {
    if (type) {
      return (
        <>
          <div>
            <Drift appId="75ahy8i3pd39"
              userId={info.userId}
              attributes={{ email: info.userEmail }}
            />
            <header>
              <Navbar />
            </header>
            <div class="row position-relative custom-bg-gray89">
              <SideBar routes={props} />
              <main class="col ml-2 mt-2 mb-3 mr-0 p-0 rounded-lg">
                {routes()}
              </main>

            </div>

          </div>
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
