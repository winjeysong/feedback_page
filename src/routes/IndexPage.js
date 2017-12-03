import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TopItemComponent from '../components/TopItem/TopItem';
import LeftNavComponent from '../components/LeftNav/LeftNav';
import Pic1 from '../assets/63F0209E-673E-4812-8DDB-4025171395B7@3x.png';
import Pic2 from '../assets/39D43ABF-538E-452C-AA96-45FBF859E525@3x.png';
import Pic3 from '../assets/71ACEA5D-F990-4089-8E8E-903A8725E606@3x.png';
import Pic4 from '../assets/AD8F6B3B-9993-462D-9F52-BF3EAE237C72@3x.png';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <ul>
        <li><TopItemComponent path={'/推广运营'} iconPath={Pic1} info={'推广运营'} /></li>
        <li><TopItemComponent path={'/会员积分'} iconPath={Pic2} info={'会员积分'} /></li>
        <li><TopItemComponent path={'/页面管理'} iconPath={Pic3} info={'页面管理'} /></li>
        <li><TopItemComponent path={'/商场管理'} iconPath={Pic4} info={'商场管理'} /></li>
      </ul>
      <LeftNavComponent />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
