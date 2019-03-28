import companiesList from '../components/companiesList/companiesList';
import { connect } from 'react-redux';
import {  removeCompany } from '../actions/index'

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
  }
  

const mapDispatchToProps = (dispatch) => {
    return {
        removeCompany: (id) => {
            dispatch( removeCompany(id))
        },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(companiesList)
