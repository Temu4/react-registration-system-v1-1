import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <td>
          <button onClick={() => this.props.removeUser()}>x</button>
        </td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.activity}</td>
        <td>
          {this.props.checkA}
          {this.props.checkB}
          {this.props.checkC}
        </td>
      </tr>
    );
  }
}

export default User;
