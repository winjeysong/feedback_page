import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function TopItem4({ location }) {
  const content = <h1>商场管理页面</h1>;
  return (
    <MainLayout location={location} content={content} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem4);
