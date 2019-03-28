import uuid from 'uuid';

export const addCompany = text => ({
  type: 'ADD_COMPANY',
  id: uuid.v4(),
  companyName: text
})

export const removeCompany = _id => ({
  type: 'REMOVE_COMPANY',
  id: _id
})
