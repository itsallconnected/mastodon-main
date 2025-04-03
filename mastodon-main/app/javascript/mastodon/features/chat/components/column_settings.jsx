import PropTypes from 'prop-types';

import { defineMessages, injectIntl } from 'react-intl';

import ImmutablePureComponent from 'react-immutable-pure-component';
import { connect } from 'react-redux';

import SettingToggle from '../../notifications/components/setting_toggle';

const messages = defineMessages({
  settings: { id: 'chat.settings', defaultMessage: 'Chat settings' },
  encryptByDefault: { id: 'chat.settings.encrypt_by_default', defaultMessage: 'Enable OMEMO encryption by default' },
  notifications: { id: 'chat.settings.notifications', defaultMessage: 'Chat notifications' },
  showRead: { id: 'chat.settings.show_read', defaultMessage: 'Show read receipts' },
});

export default @connect()
@injectIntl
class ColumnSettings extends ImmutablePureComponent {

  static propTypes = {
    settings: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  handleChange = (key, checked) => {
    this.props.onChange({ ...this.props.settings, [key]: checked });
  };

  render() {
    const { settings, intl } = this.props;

    return (
      <div>
        <span className='column-settings__section'>{intl.formatMessage(messages.settings)}</span>

        <div className='column-settings__row'>
          <SettingToggle
            prefix='chat_settings'
            settings={settings}
            settingPath={['encrypt_by_default']}
            onChange={this.handleChange}
            label={intl.formatMessage(messages.encryptByDefault)}
          />
        </div>

        <div className='column-settings__row'>
          <SettingToggle
            prefix='chat_settings'
            settings={settings}
            settingPath={['show_read']}
            onChange={this.handleChange}
            label={intl.formatMessage(messages.showRead)}
          />
        </div>

        <span className='column-settings__section'>{intl.formatMessage(messages.notifications)}</span>

        <div className='column-settings__row'>
          <SettingToggle
            prefix='chat_settings'
            settings={settings}
            settingPath={['alerts']}
            onChange={this.handleChange}
            label='Desktop notifications'
          />
        </div>
      </div>
    );
  }

} 