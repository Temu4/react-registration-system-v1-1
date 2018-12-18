import React from "react";
import UsersList from "./UsersList";
import RegistrationForm from "./RegistrationForm";

class RegistrationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  // Changing state for input text type and select options
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Changing state for input checkboxes
  handleChangeCheckbox(event) {
    this.setState({ [event.target.name]: event.target.id });
  }

  //add new user in users:[]
  addUser() {
    let usersCopy = this.state.users.slice();
    usersCopy.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      activity: this.state.activity,
      checkA: this.state.checkA,
      checkB: this.state.checkB,
      checkC: this.state.checkC
    });

    //erase input fields after adding
    this.setState({
      users: usersCopy,
      firstName: "",
      lastName: "",
      activity: "",
      checkA: false,
      checkB: false,
      checkC: false
    });
  }

  //remove user with current index from users:[]
  removeUser(index) {
    let usersCopy = this.state.users.slice();
    usersCopy.splice(index, 1);
    this.setState({ users: usersCopy });
  }

  render() {
    return (
      <div>
        <RegistrationForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          activity={this.state.activity}
          checkA={this.state.checkA}
          checkB={this.state.checkB}
          checkC={this.state.checkC}
          handleChange={this.handleChange}
          handleChangeCheckbox={this.handleChangeCheckbox}
          addUser={this.addUser}
        />
        <UsersList userList={this.state.users} removeUser={this.removeUser} />
      </div>
    );
  }
}

export default RegistrationSystem;
