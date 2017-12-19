import React from 'react';
import { Menu } from 'antd';
import TopItem from '../TopItem/TopItem';
import Pic1 from '../../assets/63F0209E-673E-4812-8DDB-4025171395B7@1x.png';
import Pic2 from '../../assets/39D43ABF-538E-452C-AA96-45FBF859E525@1x.png';
import Pic3 from '../../assets/71ACEA5D-F990-4089-8E8E-903A8725E606@1x.png';
import Pic4 from '../../assets/AD8F6B3B-9993-462D-9F52-BF3EAE237C72@1x.png';

function TopMenu({ location }) {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      selectedKeys={[location.pathname]}
      mode="horizontal"
      style={{ background: 'none', position: 'absolute', top: 0, left: 205, width: 'max-content', height: '70px', textAlign: 'center', lineHeight: 'normal', borderBottom: 'none' }}
    >
      <Menu.Item key="/推广运营"><TopItem path={'/推广运营'} iconPath={Pic1} info={'推广运营'} /></Menu.Item>
      <Menu.Item key="/会员积分"><TopItem path={'/会员积分'} iconPath={Pic2} info={'会员积分'} /></Menu.Item>
      <Menu.Item key="/页面管理"><TopItem path={'/页面管理'} iconPath={Pic3} info={'页面管理'} /></Menu.Item>
      <Menu.Item key="/商场管理"><TopItem path={'/商场管理'} iconPath={Pic4} info={'商场管理'} /></Menu.Item>
    </Menu>
  );
}

export default TopMenu;
