import styled from 'styled-components';

export const ContentTip = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: #1c4a70;
  line-height: 16px;
  position: relative;
  top: -28px;
  font-weight: bold;
`;

export const InfoWrap = styled.span`
  display: block;
  position: relative;
  top: 5px;
  color: #fff;
  opacity: 0.8;
  font-size: 14px;
  line-height: 14px;
  font-family: sans-serif;
  font-weight: 300;
`;

// topitem wrapper
export const TopWrap = styled.div`
  width: 80px;
  height: 70px;
  &:hover {
    background: #fff;
  }

  a {
    display: inline-block;
    padding: 15px 12px 22px;
    &:hover > span {
      color: #fe6900;
    }
  }
`;
