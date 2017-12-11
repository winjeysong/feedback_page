import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import styled from 'styled-components';
import './TopItem.scss';

const InfoWrap = styled.span`
  height: max-content;
  line-height: normal;
  position: relative;
  top: 1px;
  opacity: 0.8;
  font-size: 14px;
  line-height: 14px;
  font-family: sans-serif;
  font-weight: 300;
`;

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

