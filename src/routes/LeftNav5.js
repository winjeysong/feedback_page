import React from 'react';
import { connect } from 'dva';
import styles from './LeftNav5.css';

function LeftNav5() {
  return (
    <div className={styles.normal}>
      消息中心
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LeftNav5);
