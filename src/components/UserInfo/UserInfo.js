import React from 'react';
import { Avatar } from 'antd';
import { UserWrap } from '../../styled/styled-components';
import defaultAvt from '../../assets/9985A4D7-77A3-43D5-AAB5-CBB052689812@1x.png';

function UserInfo({ userInfo }) {
  const { name, tele, card, avatar } = userInfo;
  return (
    <UserWrap>
      <Avatar src={avatar || defaultAvt} style={{ backgroundColor: '#ececec', width: 50, height: 50, borderRadius: '100%' }} />
      <ul className="user-info">
        <li className="name">{`昵称：${name}`}</li>
        <li className="tele">{`手机号：${tele}`}</li>
        <li className="card">{`卡号：${card}`}</li>
      </ul>
    </UserWrap>
  );
}

export default UserInfo;
