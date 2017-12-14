import styled from 'styled-components';

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
  font-weight: bold;
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
