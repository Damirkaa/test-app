import React from 'react';
import './companyItem.css';

const companyItem = ({ removeCompany, text }) => (
  <li className="company-item">
    <span>
        {text}
    </span>
    <button className="company-item__button" onClick = { () => removeCompany()}>
        Remove company
    </button>
  </li>
)

export default companyItem;