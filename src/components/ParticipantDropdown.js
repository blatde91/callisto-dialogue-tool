import React, { Component } from 'react';
import 'materialize-css';
import { characters } from '../data/characters';
import Select from 'react-select';


class ParticipantDropdown extends Component {
  render() {
    return (
      <Select
        isMulti
        name="participants"
        value={this.props.leftParticipants}
        options={characters}
        onChange={this.props.onChange}
      />
    )
  }
};

export default ParticipantDropdown;



