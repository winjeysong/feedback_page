import React from 'react';

function UserInfo({ userInfo }) {
  const { name, tele, card } = userInfo;
  return (
    <ul className="user-info">
      <li className="name">{name}</li>
      <li className="tele">{tele}</li>
      <li className="card">{card}</li>
    </ul>
  );
}

export default UserInfo;
