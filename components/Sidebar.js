import { Component } from 'react';
import Link from 'next/link';

import SidebarStyles from './../styles/SidebarStyles';

export default class Sidebar extends Component {
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
    this.props.getForm(this.state);
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('token', this.state.token);
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
      </SidebarStyles>
    );
  }
}
