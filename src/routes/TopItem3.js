import React from 'react';
import { connect } from 'dva';
import styles from './TopItem3.css';

function TopItem3() {
  return (
    <div className={styles.normal}>
      页面管理
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem3);
