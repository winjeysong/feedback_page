import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TopItem1 from './routes/TopItem1.js';
import TopItem2 from './routes/TopItem2.js';
import TopItem3 from './routes/TopItem3.js';
import TopItem4 from './routes/TopItem4.js';
import LeftNav1 from './routes/LeftNav1.js';
import LeftNav2 from './routes/LeftNav2.js';
import LeftNav3 from './routes/LeftNav3.js';
import LeftNav4 from './routes/LeftNav4.js';
import LeftNav5 from './routes/LeftNav5.js';
import LeftNav6 from './routes/LeftNav6.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/推广运营" component={TopItem1} />
        <Route path="/会员积分" component={TopItem2} />
        <Route path="/页面管理" component={TopItem3} />
        <Route path="/商场管理" component={TopItem4} />
        <Route path="/票圈管理" component={LeftNav1} />
        <Route path="/活动管理" component={LeftNav2} />
        <Route path="/优惠管理" component={LeftNav3} />
        <Route path="/投放管理" component={LeftNav4} />
        <Route path="/消息中心" component={LeftNav5} />
        <Route path="/意见反馈" component={LeftNav6} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
