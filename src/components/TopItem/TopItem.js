import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { TopItemStyles } from '../../styled/styled-components';

const { TopWrap, InfoWrap } = TopItemStyles;
const TopItem = ({ path, iconPath, info }) => {
  return (
    <TopWrap myLocation={path}>
      <Link to={path}>
        <img src={iconPath} alt={info} />
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

