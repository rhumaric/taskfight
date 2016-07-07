import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore;