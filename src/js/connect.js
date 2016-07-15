import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import results from './store/selectors/results';

function mapStateToProps(state) {
  return {
    ...state,
    results: results(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore;