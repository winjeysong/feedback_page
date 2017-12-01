import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav.css';

function LeftNav() {
  return (
    <div className={styles.normal}>
      Route Component: LeftNav
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav);
