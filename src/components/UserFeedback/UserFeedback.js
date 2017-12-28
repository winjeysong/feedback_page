import React from 'react';
import { FeedbackWrap } from '../../styled/styled-components';

function UserFeedback({ userFeedback }) {
  const { fbContent, fbImg, fbDate, fbRe } = userFeedback;
  const transDate = (date) => {
    const dateParse = date ? new Date(Date.parse(date)) : new Date();
    const re = /(\d{4})\/(\d{2})\/(\d{2})/;
    const dateFormat = dateParse.toLocaleString('cn', { hour12: false }).replace(re, '$1-$2-$3');
    return dateFormat;
  };
  const merchantRe = fbRe ? <li className="fb-response">{`[商家回复] ${fbRe.reMsg}`}</li> : null;
  const reStaffDate = fbRe ? <li className="fb-response fb-re-staff-date">{`[${fbRe.reStaff}] ${transDate(fbRe.reDate)}`}</li> : null;

  return (
    <FeedbackWrap>
      <ul className="feedback-content">
        <li className="fb-content">{fbContent}</li>
        <li className="fb-img"><img src={fbImg} alt="feedback img" /></li>
        <li className="fb-date">{transDate(fbDate)}</li>
        {merchantRe}
        {reStaffDate}
      </ul>
    </FeedbackWrap>
  );
}

export default UserFeedback;
