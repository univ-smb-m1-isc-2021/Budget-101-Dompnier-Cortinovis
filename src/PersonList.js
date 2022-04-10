import React from 'react';

import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/employees`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul  id="test">
        { this.state.persons.map(person => <li>{person.firstName}</li>)}
      </ul>
    )
  }
}