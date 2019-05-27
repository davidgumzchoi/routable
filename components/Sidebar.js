import { Component } from 'react';

import SidebarStyles from './../styles/SidebarStyles';

export default class Sidebar extends Component {
  state = { username: 'wesbos', token: '9a0c090405d89a14fd4dc83c35bfff0bdcd39272' };

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
  };

  render() {
    return (
      <SidebarStyles onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </label>
        <label>
          API Key:
          <input type="text" name="token" value={this.state.token} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </SidebarStyles>
    );
  }
}
