import React from 'react'
import CompanyItem from '../companyItem/companyItem';
import './companiesList.css'

const companyList = ({ companies, removeCompany }) => (
  <ul className="companies-list-wrap">
    {companies.map(company => (
      <CompanyItem  key={company.id} text={company.companyName} removeCompany={ () => removeCompany(company.id)} />
    ))}
  </ul>
)


export default companyList;