import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import TopItem1 from './routes/TopItem1.js';
import TopItem2 from './routes/TopItem2';
import TopItem3 from './routes/TopItem3';
import TopItem4 from './routes/TopItem4';
import TopItemRoute1 from './routes/TopItemRoute1';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/推广运营" component={TopItemRoute1} />
        <Route path="/会员积分" component={TopItem2} />
        <Route path="/页面管理" component={TopItem3} />
        <Route path="/商场管理" component={TopItem4} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
