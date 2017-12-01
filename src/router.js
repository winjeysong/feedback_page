import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import TopItem from "./routes/TopItem.js";

import LeftNav from "./routes/LeftNav.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/TopItem" component={TopItem} />
        <Route path="/LeftNav" component={LeftNav} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
