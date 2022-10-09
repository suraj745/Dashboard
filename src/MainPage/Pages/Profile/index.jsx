/**
 * Tables Routes
 */
import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import EmployeeProfile from "./employeeprofile";
import ClientProfile from "./clientprofile";
import Leadprofile from "./Leadprofile";
import Lead_edit from "./Lead_Edit";
import Client_Edit from "./Client_Edit";
// import ClientProfile from "."

const subscriptionroute = ({ match }) => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/employee-profile`}
      />
      <Route
        path={`${match.url}/employee-profile`}
        component={EmployeeProfile}
      />
      <Route
        path={`${match.url}/client-profile/:clientid`}
        component={ClientProfile}
      />
      <Route
        path={`${match.url}/Leadprofile/:clientid`}
        component={Leadprofile}
      />
      <Route path={`${match.url}/Lead_edit/:clientid`} component={Lead_edit} />
      <Route
        path={`${match.url}/Client_Edit/:clientid`}
        exact
        component={Client_Edit}
      />
    </Switch>
  );
};

export default subscriptionroute;
