import React from 'react';
import { Route, Switch } from 'dva/router';
import TopItem1 from './TopItem1';
import LeftNav1 from './LeftNav1';
import LeftNav2 from './LeftNav2';
import LeftNav3 from './LeftNav3';
import LeftNav4 from './LeftNav4';
import LeftNav5 from './LeftNav5';
import LeftNav6 from './LeftNav6';

const TopItemRoute = () => (
  <div>
    <Switch>
      <Route exact path="/推广运营" component={TopItem1} />
      <Route path="/推广运营/票圈管理" component={LeftNav1} />
      <Route path="/推广运营/活动管理" component={LeftNav2} />
      <Route path="/推广运营/优惠管理" component={LeftNav3} />
      <Route path="/推广运营/投放管理" component={LeftNav4} />
      <Route path="/推广运营/消息中心" component={LeftNav5} />
      <Route path="/推广运营/意见反馈" component={LeftNav6} />
    </Switch>
  </div>
);

export default TopItemRoute;
