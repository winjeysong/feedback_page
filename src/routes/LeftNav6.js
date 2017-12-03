import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav6.css';

function LeftNav6() {
  return (
    <div className={styles.normal}>
      意见反馈
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav6);
