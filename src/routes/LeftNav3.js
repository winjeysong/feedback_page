import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav3.css';

function LeftNav3() {
  return (
    <div className={styles.normal}>
      优惠管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav3);
