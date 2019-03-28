import React, { Component } from 'react';
import './App.css';
import AddCompany from '../../containers/addCompanyToStore';
import CompaniesList from '../../containers/companiesListFromStore'

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddCompany/>
          <CompaniesList/>
      </div>
    );
  }
}

export default App;
