import React from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // array with slect options
    let optionsArray = [
      "Science Lab",
      "Activity",
      "Cooking",
      "Painting",
      "Swimming"
    ];
    let options = optionsArray.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    return (
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
          <label htmlFor="activity">Select Activity</label>
          <select
            name="activity"
            id="activity"
            value={this.props.activity}
            onChange={this.props.handleChange}
          >
            {options}
          </select>
          <legend>Check all that apply:</legend>
          <div>
            <input
              type="checkbox"
              name="checkA"
              id="a"
              checked={this.props.checkA}
              onChange={this.props.handleChangeCheckbox}
            />
            <label htmlFor="checkA">a) Dietary Restrictions</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="checkB"
              id="b"
              checked={this.props.checkB}
              onChange={this.props.handleChangeCheckbox}
            />
            <label htmlFor="checkB">b) Physical Disabilities</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="checkC"
              id="c"
              checked={this.props.checkC}
              onChange={this.props.handleChangeCheckbox}
            />
            <label htmlFor="checkC">c) Medical Needs</label>
          </div>
        </form>
        <input
          type="submit"
          value="Submit"
          onClick={
            this.props.firstName && this.props.lastName
              ? () => this.props.addUser()
              : () =>
                  alert("Please, check user's First Name or Last Name fields")
          }
        />
      </div>
    );
  }
}

export default RegistrationForm;
