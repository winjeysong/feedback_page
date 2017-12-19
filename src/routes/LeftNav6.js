import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function LeftNav6({ location }) {
  const tip = '意见反馈';
  const content = <h1>推广运营页面</h1>;
  return (
    <MainLayout location={location} content={content} tip={tip} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav6);
