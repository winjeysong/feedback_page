import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { InfoWrap, TopWrap } from '../../styled/styled-components';
import './TopItem.less';

const TopItem = ({ path, iconPath, info }) => {
  return (
    <TopWrap>
      <Link to={path}>
        <img src={iconPath} alt={info} width="33%" height="33%" />
        <InfoWrap>{info}</InfoWrap>
      </Link>
    </TopWrap>
  );
};

TopItem.propTypes = {
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default TopItem;

