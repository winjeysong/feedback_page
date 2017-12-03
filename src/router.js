import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LeftNav from "./routes/LeftNav.js";

import TopItem1 from "./routes/TopItem1.js";

import TopItem2 from "./routes/TopItem2.js";

import TopItem3 from "./routes/TopItem3.js";

import TopItem4 from "./routes/TopItem4.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/LeftNav" component={LeftNav} />
        <Route path="/推广运营" component={TopItem1} />
        <Route path="/会员积分" component={TopItem2} />
        <Route path="/页面管理" component={TopItem3} />
        <Route path="/商场管理" component={TopItem4} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
