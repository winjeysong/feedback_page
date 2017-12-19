import React from 'react';
import { Link } from 'dva/router';
import { Logo } from '../../styled/styled-components';

function PageLogo() {
  return (
    <Link to="/">
      <Logo><span>猫茂商场</span></Logo>
    </Link>
  );
}

export default PageLogo;
