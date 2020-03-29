import React from "react";

class LoginForm extends React.Component {
  state = { data: "" };

  onSubmit = event => {
    event.preventDefault();

    const name = this.name.value;
    const age = this.age.value;
    const data = { name: name, age: age };
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="Name"
            ref={input => (this.name = input)}
          />
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              ref={input => (this.age = input)}
            />
          </div>
          <input type="color" value="#ffffff"></input>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <h1>
          {this.state.data.name} + {this.state.data.age}
        </h1>
      </div>
    );
  }
}

export default LoginForm;
