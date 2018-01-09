import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function TopItem3({ location }) {
  const content = <h1>页面管理页面</h1>;
  return (
    <MainLayout location={location} content={content} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem3);
