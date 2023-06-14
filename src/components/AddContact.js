import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === "")
    {
      alert (" All the fields are mandotory !!")
      return
    }
    this.props.AddContactHandler(this.state);
    this.setState({name:"", email:""})

    console.log(this.state);

  }

  render() {
    return (
      <div className="ui huge main">
        <h2 className="ui dividing header">Add Contact </h2>

        <form className="ui form " onSubmit={this.add}>
          <div className="field">
            <label> Name</label>
            
            <input
              type="text"
              name="Name"
              placeholder=" Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button" type="submit">
            Add Conctact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
