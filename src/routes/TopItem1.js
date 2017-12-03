import React from 'react';
import { connect } from 'dva';
import styles from './TopItem1.css';

function TopItem1() {
  return (
    <div className={styles.normal}>
      推广运营
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TopItem1);
