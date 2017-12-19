import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

function LeftNav({ location }) {
  return (
    <Menu
      defaultSelectedKeys={['/推广运营/意见反馈']}
      defaultOpenKeys={['/推广运营/意见反馈']}
      selectedKeys={[location.pathname]}
      mode="inline"
    >
      <Menu.Item key="/推广运营/票圈管理"><Link to="/推广运营/票圈管理">票圈管理</Link></Menu.Item>
      <Menu.Item key="/推广运营/活动管理"><Link to="/推广运营/活动管理">活动管理</Link></Menu.Item>
      <Menu.Item key="/推广运营/优惠管理"><Link to="/推广运营/优惠管理">优惠管理</Link></Menu.Item>
      <Menu.Item key="/推广运营/投放管理"><Link to="/推广运营/投放管理">投放管理</Link></Menu.Item>
      <Menu.Item key="/推广运营/消息中心"><Link to="/推广运营/消息中心">消息中心</Link></Menu.Item>
      <SubMenu key="/推广运营/意见反馈" title={<span>意见反馈</span>}>
        <Menu.Item key="/推广运营/意见反馈"><Link to="/推广运营/意见反馈">意见反馈</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftNav;
