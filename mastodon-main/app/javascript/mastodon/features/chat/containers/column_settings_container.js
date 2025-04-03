import { connect } from 'react-redux';

import { changeSetting } from 'mastodon/actions/settings';

import ColumnSettings from '../components/column_settings';

const mapStateToProps = state => ({
  settings: state.getIn(['settings', 'chat']),
});

const mapDispatchToProps = dispatch => ({
  onChange(settings) {
    dispatch(changeSetting(['chat'], settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSettings); 