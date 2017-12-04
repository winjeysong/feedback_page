import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './LeftNav.css';

const SubMenu = Menu.SubMenu;

function LeftNav() {
  return (
    <Menu
      style={{ width: 200, height: 55 }}
      defaultSelectedKeys={['6']}
      defaultOpenKeys={['sub6']}
      mode="inline"
    >
      <Menu.Item key="1"><Link to="/票圈管理">票圈管理</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/活动管理">活动管理</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/优惠管理">优惠管理</Link></Menu.Item>
      <Menu.Item key="4"><Link to="/投放管理">投放管理</Link></Menu.Item>
      <Menu.Item key="5"><Link to="/消息中心">消息中心</Link></Menu.Item>
      <SubMenu key="sub6" title={<span>意见反馈</span>}>
        <Menu.Item key="6"><Link to="/意见反馈">意见反馈</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftNav;
