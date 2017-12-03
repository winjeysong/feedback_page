import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav4.css';

function LeftNav4() {
  return (
    <div className={styles.normal}>
      投放管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav4);
