import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import MainContent from '../components/MainContent/MainContent';

function LeftNav6({ location }) {
  const tip = '意见反馈';
  const content = <MainContent />;
  return (
    <MainLayout location={location} content={content} tip={tip} />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav6);
