import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function TopItem2({ location }) {
  const content = <h1>会员积分页面</h1>;
  return (
    <MainLayout location={location} content={content} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem2);
