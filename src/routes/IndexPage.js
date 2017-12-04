import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TopMenuComponent from '../components/TopMenu/TopMenu';
import LeftNavComponent from '../components/LeftNav/LeftNav';


function IndexPage() {
  return (
    <div className={styles.normal}>
      <TopMenuComponent />
      <LeftNavComponent />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
