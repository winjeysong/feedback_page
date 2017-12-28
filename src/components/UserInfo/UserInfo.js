import React from 'react';
import { UserWrap } from '../../styled/styled-components';

function UserInfo({ userInfo }) {
  const { name, tele, card, avatar } = userInfo;
  return (
    <UserWrap avatar={avatar}>
      <ul className="user-info">
        <li className="name">{`昵称：${name}`}</li>
        <li className="tele">{`手机号：${tele}`}</li>
        <li className="card">{`卡号：${card}`}</li>
      </ul>
    </UserWrap>
  );
}

export default UserInfo;
