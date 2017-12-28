import React from 'react';
import { UserWrap } from '../../styled/styled-components';

function UserInfo({ userInfo }) {
  const { name, tele, card, avatar } = userInfo;
  return (
    <UserWrap avatar={avatar}>
      <ul className="user-info">
        <li className="name">{name}</li>
        <li className="tele">{tele}</li>
        <li className="card">{card}</li>
      </ul>
    </UserWrap>
  );
}

export default UserInfo;
