import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginapi from "./component/api/Loginapi";
import MainIndex from "./component/api/MainIndex";
import PrimaryIndex from "./component/api/PrimaryIndex";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrimaryIndex path="/login"/>
          <MainIndex path='/paytoall' />
          {/* <Loginapi exact path='/' /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
