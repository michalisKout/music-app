import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state = {}) => {
  return state;
};

export default connect(mapStateToProps)(Albums);
