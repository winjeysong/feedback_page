import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav2.css';

function LeftNav2() {
  return (
    <div className={styles.normal}>
      活动管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav2);
