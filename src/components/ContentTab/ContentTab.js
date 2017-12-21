import React from 'react';
import { Menu } from 'antd';
import { ContentWrap, CustomMenu } from '../../styled/styled-components';

function ContentTab(/* { location } */) {
  return (
    <ContentWrap>
      <CustomMenu
        mode="horizontal"
        defaultSelectedKeys={['日常反馈']}
        // selectedKeys={[location.pathname]}
      >
        <Menu.Item key="日常反馈">日常反馈</Menu.Item>
        <Menu.Item key="物业管理">物业管理</Menu.Item>
      </CustomMenu>
    </ContentWrap>
  );
}

export default ContentTab;
