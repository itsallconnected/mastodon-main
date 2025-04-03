import React from 'react';
import { connect } from 'react-redux';
import { defineMessages, injectIntl } from 'react-intl';
import Column from '../ui/components/column';
import { fetchResource } from 'mastodon/actions/api';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const messages = defineMessages({
  title: { id: 'column.chat', defaultMessage: 'Chat' },
});

/**
 * Chat feature component that integrates Converse.js with OMEMO encryption.
 * This component fetches XMPP credentials and initializes the Converse.js chat client.
 */
class Chat extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Load the Converse.js script
    this.loadConverseScript();
    
    // Load XMPP credentials
    this.props.dispatch(fetchResource('/api/v1/xmpp/credentials'))
      .then(response => {
        if (response.data) {
          this.setState({ loading: false });
          this.initializeConverse(response.data);
        }
      })
      .catch(error => {
        this.setState({ 
          loading: false, 
          error: error.message || 'Failed to load XMPP credentials'
        });
      });
  }
  
  loadConverseScript = () => {
    if (window.converse) return;
    
    const script = document.createElement('script');
    script.src = '/converse-assets/converse.min.js';
    script.async = true;
    
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/converse-assets/converse.min.css';
    
    document.head.appendChild(stylesheet);
    document.body.appendChild(script);
  };
  
  initializeConverse = debounce((credentials) => {
    if (!window.converse) {
      setTimeout(() => this.initializeConverse(credentials), 500);
      return;
    }
    
    const domain = process.env.XMPP_DOMAIN || 'xmpp.example.com';
    const boshUrl = process.env.XMPP_BOSH_URL || `https://bosh.${domain}/http-bind`;

    // Initialize Converse.js with OMEMO encryption
    window.converse.initialize({
      authentication: 'login',
      auto_login: true,
      bosh_service_url: boshUrl,
      jid: `${credentials.username}@${domain}`,
      password: credentials.password,
      allow_logout: false,
      view_mode: 'embedded',
      whitelisted_plugins: ['omemo', 'converse-chat-view'],
      omemo_default: true, // Enable OMEMO encryption by default
      allow_contact_requests: true,
      show_client_info: false,
      theme: 'concord',
      message_archiving: 'always',
      auto_away: 300,
      auto_xa: 900,
      locales_url: '/converse-assets/locales/',
      assets_path: '/converse-assets/',
      persistent_store: 'IndexedDB',
      trusted: true,
      debug: false,
      singleton: true,
    });
  }, 500);
  
  render() {
    const { intl } = this.props;
    const { loading, error } = this.state;
    
    return (
      <Column label={intl.formatMessage(messages.title)}>
        <div className="scrollable">
          {loading && (
            <div className="empty-column-indicator">
              <span className="loading-indicator__figurine" />
              <span>Loading chat...</span>
            </div>
          )}
          
          {error && (
            <div className="empty-column-indicator">
              <span>Error: {error}</span>
              <span>Chat service may not be configured correctly</span>
            </div>
          )}
          
          <div id="conversejs" className="chat-container" style={{ height: 'calc(100vh - 120px)' }} />
        </div>
      </Column>
    );
  }
}

export default connect()(injectIntl(Chat)); 