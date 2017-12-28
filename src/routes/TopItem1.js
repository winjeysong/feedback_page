import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function TopItem1({ location }) {
  const content = <h1>推广运营页面</h1>;
  return (
    <MainLayout location={location} content={content} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem1);
