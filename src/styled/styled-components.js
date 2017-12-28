import styled from 'styled-components';
import { Menu, Table } from 'antd';
import logoimg from '../assets/C510FF9D-0B61-4C68-99FD-89F3657B4EE0@1x.png';
import avatar from '../assets/9985A4D7-77A3-43D5-AAB5-CBB052689812@1x.png';

// global variables
const primaryColor = '#fff';
const highlightColor = '#fe6900';
const primaryBorderStyle = `
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 4px 0 rgba(207,207,207,0.6);
  border-radius: 6px;
`;
const tableColor = '#0c92ff';

export const ContentTip = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: #1c4a70;
  line-height: 16px;
  position: relative;
  top: -28px;
  font-weight: 400;
`;

// topitem wrapper

const TopItemStyle = {
  // variables
  topItemWidth: '80px',
  topItemHeight: '70px',
  topItemPrimaryColor: primaryColor,

  TopWrap() {
    return styled.div`
      width: ${this.topItemWidth};
      height: ${this.topItemHeight};
      transition: background .3s ease-out;
      &:hover {
        background: ${this.topItemPrimaryColor};
      }

      a {
        display: inline-block;
        width: ${this.topItemWidth};
        height: ${this.topItemHeight};
        padding: 15px 0;
        transition: color .3s ease-out;
        &:hover > span {
          color: ${highlightColor};
        }
      }
    `;
  },

  InfoWrap() {
    return styled.span`
      display: block;
      width: max-content;
      position: absolute;
      top: 40px;
      left: 32px;
      color: ${this.topItemPrimaryColor};
      opacity: 0.8;
      font-size: 14px;
      line-height: 14px;
      font-family: sans-serif;
      font-weight: 300;
    `;
  },
};

export const TopItemStyles = {
  TopWrap: TopItemStyle.TopWrap(),
  InfoWrap: TopItemStyle.InfoWrap(),
};

// page logo
export const Logo = styled.span`
  color: ${primaryColor};
  font-family: sans-serif;
  font-size: 18px;
  line-height: 20px;
  position: absolute;
  top: 21px;
  left: 24px;

  span {
    display: inline-block;
    width: max-content;
    padding-left: 10px;
    position: absolute;
    top: 4px;
  }

  &:before {
    display: inline-block;
    content: "";
    background: url(${logoimg}) no-repeat;
    width: 39px;
    height: 28px;
  }
`;

// content wrapper
const ContentWrapStyle = {
  isCenter: (props) => { return props.center ? 'center' : null; },

  ContentWrap() {
    return styled.div`
      margin: 0 0 12px;
      padding: 20px 15px 0; 
      background: ${primaryColor};
      ${primaryBorderStyle}
      text-align: ${this.isCenter};
    `;
  },
};

export const ContentWrap = ContentWrapStyle.ContentWrap();

// custom menu for ContentTab
export const CustomMenu = styled(Menu)`
  color: #666;
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0 !important;
  margin-bottom: 8px !important;

  li.ant-menu-item:hover,
  li.ant-menu-item-active,
  li.ant-menu-item-selected {
    color: ${tableColor};
    border-bottom: 2px solid #1496ff;
  }
`;

// custom table for FeedbackTable
export const CustomTable = styled(Table)`
  background: ${primaryColor} !important;
  ${primaryBorderStyle}

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${tableColor};
  }

  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: ${tableColor};
    border-color: ${tableColor};
  }

  thead.ant-table-thead {
    border: 1px solid #e9ecef;

    > tr > th {
      text-align: center;
      padding: 15px 8px;

      span {
        color: #4a93cf;
        font-size: 12px;
        font-family: sans-serif;
        font-weight: 500;
      }
    }
  }

  tbody.ant-table-tbody {
    color: #083050;
    font-family: sans-serif;
    
    > tr > td {
      text-align: center;
      padding: 15px 8px;
    }
  }
`;

// user wrapper
const UserWrapStyle = {
  isAvatar: (props) => { return props.avatar ? props.avatar : avatar; },

  UserWrap() {
    return styled.div`
    display: inline-block;
      width: max-content;

      ul.user-info {
        display: inline-block;
        width: max-content;
    
        > li {
          text-align: left;
          font-size: 12px;
          line-height: 16px;
        }
      }
    
      &:before {
        display: inline-block;
        content: "";
        background: #ececec;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        position: relative;
        top: 3px;
        left: -12px;
      }
    
      &:after {
        display: inline-block;
        content: "";
        background: url(${this.isAvatar}) no-repeat 50% 50%;
        width: 50px;
        height: 50px;
        position: relative;
        top: 3px;
        left: -187px;
      }
    `;
  },
};

export const UserWrap = UserWrapStyle.UserWrap();

