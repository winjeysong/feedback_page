import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function LeftNav1({ location }) {
  const tip = '票圈管理';
  const content = <h1>推广运营页面</h1>;
  return (
    <MainLayout location={location} tip={tip} content={content} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav1);
