import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav1.css';

function LeftNav1() {
  return (
    <div className={styles.normal}>
      票圈管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav1);
