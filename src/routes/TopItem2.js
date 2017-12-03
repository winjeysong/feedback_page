import React from 'react';
import { connect } from 'dva';
import styles from './TopItem2.css';

function TopItem2() {
  return (
    <div className={styles.normal}>
      会员积分
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem2);
