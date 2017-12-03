import React from 'react';
import { connect } from 'dva';
import styles from './TopItem4.css';

function TopItem4() {
  return (
    <div className={styles.normal}>
      商场管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem4);
