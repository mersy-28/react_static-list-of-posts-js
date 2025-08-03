import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{user.name}</p>
    <p className="UserInfo__email">{user.email}</p>
  </div>
);
