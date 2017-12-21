import styled from 'styled-components';
import logoimg from '../assets/C510FF9D-0B61-4C68-99FD-89F3657B4EE0@1x.png';

// global variables
const primaryColor = '#fff';
const highlightColor = '#fe6900';

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
    border: 1px solid #e5e5e5;
    box-shadow: 0 0 4px 0 rgba(207,207,207,0.6);
    border-radius: 6px;
    text-align: ${this.isCenter};
  `;
  },
};

export const ContentWrap = ContentWrapStyle.ContentWrap();
