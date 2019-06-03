import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetSidebar, setSidebar } from './../store/actions';
import SidebarStyles from './../styles/SidebarStyles';

class Sidebar extends Component {
  state = {
    username: localStorage.getItem('username') || 'wesbos',
    token: localStorage.getItem('token') || ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setSidebar } = this.props;
    setSidebar();

    this.props.getForm(this.state);
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('token', this.state.token);
  };

  reset = () => {
    const { resetSidebar } = this.props;
    resetSidebar();

    localStorage.setItem('username', '');
    localStorage.setItem('token', '');

    // this.setState({
    //   username: '',
    //   token: ''
    // });
  };

  render() {
    return (
      <SidebarStyles onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />
        </label>
        <label>
          API Key:{' '}
          <Link href="https://github.com/settings/tokens/new">
            <a target="_blank">Generate API Token</a>
          </Link>
          <input type="text" name="token" value={this.state.token} onChange={this.handleInputChange} required />
        </label>
        <input type="submit" value="Submit" disabled={!this.state.token.length || !this.state.username.length} />
        <input type="reset" value="Reset" onClick={this.reset} />
      </SidebarStyles>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  token: state.token
});

const mapDispatchToProps = dispatch => bindActionCreators({ resetSidebar, setSidebar }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
