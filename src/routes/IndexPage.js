import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (<MainLayout location={location} />);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
