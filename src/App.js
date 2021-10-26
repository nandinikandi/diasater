import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './LogIn';

import Dashboard from './Dashboard/Dashboard';
import GenerateReports from './generateReports/GenerateReports';
import useToken from './Component/userToken';
import './common.css';
import ReportIncident from './ReportIncident/ReportIncident';
import ClosedIncidents from './ClosedIncidents/ClosedIncidents';

function App() {
  const { token, setToken } = useToken();
  console.log(token);

  if (!token) {
    return <LogIn setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Disaster Managment</h1>
      <h2> Hi! Welcome back,  </h2>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/generateReports">
            <GenerateReports />
          </Route>
          <Route path="/reportIncident">
            <ReportIncident />
          </Route>
          <Route path="/closedIncidents">
            <ClosedIncidents />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
