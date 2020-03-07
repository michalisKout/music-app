import { connect } from 'react-redux';
import App from '../components/MusicApp';

const mapStateToProps = (state = {}) => ({ ...state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
