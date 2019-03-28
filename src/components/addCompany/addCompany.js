import React from 'react'

const addCompany = ({ addCompany }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addCompany(input.value);
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Company</button>
      </form>
    </div>
  )
}

export default addCompany;