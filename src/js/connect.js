import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import * as selectors from './store/selectors';

function mapStateToProps(state) {
  return {
    ...state,
    results: selectors.results(state),
    progress: selectors.progress(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore;