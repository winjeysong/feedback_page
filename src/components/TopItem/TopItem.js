import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { InfoWrap } from '../../styled/styled-components';
import './TopItem.scss';

const TopItem = ({ path, iconPath, info }) => {
  return (
    <span className="top-item">
      <Link to={path}>
        <img src={iconPath} alt={info} width="33%" height="33%" />
        <br />
        <InfoWrap>{info}</InfoWrap>
      </Link>
    </span>
  );
};

TopItem.propTypes = {
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default TopItem;

