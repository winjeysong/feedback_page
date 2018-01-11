import React from 'react';
import { Avatar } from 'antd';
import { TopUserWrap } from '../../styled/styled-components';
import img from '../../assets/AC3F9E6B-FFFB-4B76-A5E4-ABF25AD22DDD@1x.png';

function ManageUser() {
  return (
    <TopUserWrap>
      <Avatar src={img} />
      <span className="top-user-name">周兴</span>
      <span className="top-logout">退出</span>
    </TopUserWrap>
  );
}

export default ManageUser;
