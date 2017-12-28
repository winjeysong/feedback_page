import React from 'react';
import { FeedbackWrap } from '../../styled/styled-components';

function UserFeedback({ userFeedback }) {
  const { fbContent, fbImg, fbDate } = userFeedback;
  const dateParse = fbDate ? new Date(Date.parse(fbDate)) : new Date();
  const re = /(\d{4})\/(\d{2})\/(\d{2})/;
  const date = dateParse.toLocaleString('cn', { hour12: false }).replace(re, '$1-$2-$3');

  return (
    <FeedbackWrap>
      <ul className="feedback-content">
        <li className="fb-content">{fbContent}</li>
        <li className="fb-img"><img src={fbImg} alt="feedback img" /></li>
        <li className="fb-date">{date}</li>
      </ul>
    </FeedbackWrap>
  );
}

export default UserFeedback;
