import React, { Component } from "react";
import Faker from "faker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const user = {
        city: Faker.address.city(),
        zipCode: Faker.address.zipCode(),
        address: Faker.address.streetAddress(),
        picture: Faker.image.avatar()
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  renderUsers(user) {
    return (
      <div style={{ border: "solid 1px #eee" }}>
        <img src={user.picture} alt={user.city} />
        <h4>city: {user.city}</h4>
        <h4>address: {user.address}</h4>
        <h4>zipCode: {user.zipCode}</h4>
      </div>
    );
  }

  render() {
    return <div>{this.state.users.map(user => this.renderUsers(user))}</div>;
  }
}

export default App;
