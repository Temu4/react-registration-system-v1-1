import React from "react";
import User from "./User";

class UsersList extends React.Component {
  constuctor(props) {
    this.state = {};
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Remove</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Activity</th>
              <th>Restrictions</th>
            </tr>
            {this.props.userList.map((user, index) => (
              <User
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                activity={user.activity}
                checkA={user.checkA}
                checkB={user.checkB}
                checkC={user.checkC}
                removeUser={() => this.props.removeUser(index)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
