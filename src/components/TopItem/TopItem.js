import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import styles from './TopItem.css';


const TopItem = ({ path, iconPath, info }) => {
  return (
    <div className={styles.TopItem}>
      <Link to={path}>
        <img src={iconPath} alt={info} width="25" height="20" />
        <p className="">{info}</p>
      </Link>
    </div>
  );
};

TopItem.propTypes = {
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default TopItem;

