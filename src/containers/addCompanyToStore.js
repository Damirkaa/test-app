import addCompanyComponent from '../components/addCompany/addCompany';
import { connect } from 'react-redux';
import { addCompany } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addCompany: (text) => {
            dispatch(addCompany(text))
        },
    }
  }
  
export default connect(null, mapDispatchToProps)(addCompanyComponent)
