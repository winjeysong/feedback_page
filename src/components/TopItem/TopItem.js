import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopItem.css';

const TopItem = ({ iconPath, info }) => {
  return (
    <div className={styles.TopItem}>
      <a href="">
        <img src={iconPath} alt={info} width="25" height="20" />
        <p className="">{info}</p>
      </a>
    </div>
  );
};

TopItem.propTypes = {
  iconPath: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default TopItem;

