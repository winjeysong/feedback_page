import styled from 'styled-components';
import { Menu, Table, Button } from 'antd';
import logoimg from '../assets/C510FF9D-0B61-4C68-99FD-89F3657B4EE0@1x.png';

// global variables
const primaryColor = '#fff';
const highlightColor = '#fe6900';
const defaultFontSize = '12px';
const middleFontSize = '14px';
const primaryBorderStyle = `
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 4px 0 rgba(207,207,207,0.6);
  border-radius: 6px;
`;
const tableColor = '#0c92ff';
const tableListStyle = `
  text-align: left;
  font-size: ${defaultFontSize};
  line-height: 16px;
`;

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
  isSelected: (props) => {
    const deRootPathOthers = decodeURIComponent(location.href.replace(location.origin, ''));
    const deRootPathOldIE = decodeURIComponent(location.href.replace(`${location.protocol}//`, '').replace(location.host, ''));
    const deRootPath = navigator.userAgent.indexOf('Trident') > -1 ? deRootPathOldIE : deRootPathOthers;
    const re = /(\/#)(\/.+)/;
    const curPathname = deRootPath.replace(re, '$2').substr(0, 5);
    return props.myLocation === curPathname ? `background: ${primaryColor}; color: ${highlightColor};` : `background: transparent; color: ${primaryColor};`;
  },

  TopWrap() {
    return styled.div`
      width: ${this.topItemWidth};
      height: ${this.topItemHeight};
      
      a {
        display: inline-block;
        width: ${this.topItemWidth};
        height: ${this.topItemHeight};
        padding: 15px 0;
        ${this.isSelected}
        transition: color,background .3s ease-out;
        &:hover,
        &:focus {
          background: ${this.topItemPrimaryColor};
        }
        &:hover > span,
        &:focus > span {
          color: ${highlightColor};
        }
      }
    `;
  },

  InfoWrap() {
    return styled.span`
      display: block;
      width: 56px;
      position: absolute;
      top: 40px;
      left: 32px;
      opacity: 0.8;
      font-size: ${middleFontSize};
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
    width: 72px;
    margin-left: 10px;
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
  font-size: ${middleFontSize};
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
const CustomTableStyle = {
  adjustFirstPage: (props) => {
    const current = props.pagination.current;
    return current >= 4 ? 'none' : 'inline-block';
  },

  adjustLastPage: (props) => {
    const { total, curPageSize, current } = props.pagination;
    return current <= Math.ceil(total / curPageSize) - 3 ? 'none' : 'inline-block';
  },

  CustomTable() {
    return styled(Table)`
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

    .ant-checkbox-checked:after {
      border-color: ${tableColor};
    }
  
    thead.ant-table-thead {
      border: 1px solid #e9ecef;
  
      > tr > th {
        text-align: center;
        padding: 15px 8px;
  
        span {
          color: #4a93cf;
          font-size: ${defaultFontSize};
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
        vertical-align: top;
        padding: 15px 8px;
      }
    }
  
    ul.ant-table-pagination {
      display: block;
      width: 100%;
      margin: 100px auto 18px;
      
      > li {
        &.ant-pagination-item-active {
          background-color: ${tableColor};
          border-color: ${tableColor};
        }
  
        &.ant-pagination-item:focus,
        &.ant-pagination-item:hover {
          border-color: ${tableColor};
  
          a {
            color: ${tableColor};
          }
        }
  
        &.ant-pagination-item-active:focus,
        &.ant-pagination-item-active:hover {
          background-color: #0ca7fe;
          border-color: #0ca7fe;
  
          a {
            color: ${primaryColor};
          }
        }
  
        &.ant-pagination-total-text {
          margin: 0 0 0 36px;
          width: 30%;
        }
  
        &.ant-pagination-prev,
        &.ant-pagination-next {
          a.ant-pagination-item-link {
            color: rgba(0,0,0,0.65);
            &:after {
              font-size: 16px;
            }
  
            &:hover,
            &:focus {
              color: ${tableColor};
            }
          }
        }
  
        &.ant-pagination-disabled {
          a.ant-pagination-item-link {
            color: rgba(0,0,0,0.25);
  
            &:hover,
            &:focus {
              color: rgba(0,0,0,0.25);
            }
          }
        }
  
        &.ant-pagination-jump-prev,
        &.ant-pagination-jump-next {
          display: none;
        }

        &.ant-pagination-item-1 {
          display: ${this.adjustFirstPage};
        }
  
        &:nth-last-child(3) {
          display: ${this.adjustLastPage};
        }

        &.ant-pagination-options {
          .ant-select .ant-select-selection,
          .ant-pagination-options-quick-jumper input {
            &:hover {
              border-color: #0ca7fe;
            }

            &:focus,
            &:active {
              border-color: #0ca7fe;
              box-shadow: 0 0 0 2px rgba(12,167,254,0.2);
            }
          }

          .ant-select-selection .ant-select-arrow:before {
            content: '\\e61d';
          }
        }
      }

      .ant-select-dropdown-menu-item:hover,
      .ant-select-dropdown-menu-item-active {
        background-color: rgba(12,167,254,0.2);
      }
    }
  `;
  },
};

export const CustomTable = CustomTableStyle.CustomTable();

// user wrapper
const UserWrapStyle = {
  UserWrap() {
    return styled.div`
      display: inline-block;
      width: 100%;

      .ant-avatar {
        position: relative;
        left: -12px;
        top: 2.5px;

        > img {
          width: 25px;
          height: 28px;
          position: absolute;
          left: 12.5px;
          top: 11px;
        }
      }

      ul.user-info {
        display: inline-block;
    
        > li {
          min-width: 126px;
          ${tableListStyle}
        }
      }
    `;
  },
};

export const UserWrap = UserWrapStyle.UserWrap();

// feedback wrapper for UserFeedback
export const FeedbackWrap = styled.div`
  width: 295px;
  margin: 0 auto;
  
  ul.feedback-content {
    > li {
      ${tableListStyle}
      line-height: 12px;
      padding: 0 0 8px;

      &.fb-date,
      &.fb-re-staff-date {
        font-size: 10px;
      }

      &.fb-response {
        color: #ffb600;
      }

      &.fb-response-content {
        line-height: 16px;
      }

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;

// custom style for Button (ReButton)
export const ReBtn = styled(Button)`
  color: ${tableColor};
  border-color: ${tableColor};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: rgba(12,146,255,0.8);
    border-color: rgba(12,146,255,0.8);
  }

  &.ant-btn-clicked:after {
    border: 0 solid ${tableColor};
  }
`;

// wrapper for ManageUser
export const TopUserWrap = styled.div`
  font-size: 14px;
  line-height: 14px;
  position: absolute;
  top: 19px;
  left: 90%;

  > span {
    color: ${primaryColor};
    font-family: sans-serif;

    &.manage-user {
      display: inline-block;
      width: 28px;
      position: inherit;
    }

    &.top-user-name {
      top: 9px;
      left: 36px;
      opacity: 0.8;
    }

    &.top-logout {
      top: 9px;
      left: 80px;
    }
  }
`;
