import React, { Component } from 'react';
import 'materialize-css';
import { characters } from '../data/characters';
import Select from 'react-select';

const options = [
  { value: 'HIRO', label: 'Hiro' },
  { value: 'JACKIE', label: 'Jackie' },
  { value: 'SHORTS', label: 'Shorts' },
  { value: 'CHET', label: 'Chet' },
  { value: 'RILEY', label: 'Riley' },
  { value: 'AKARI', label: 'Akari' },
  { value: 'VERONICA', label: 'Veronica' },
  { value: 'YOJIMBO', label: 'Yojimbo' },
  { value: 'RIVAL', label: 'Rival' },
  { value: 'EDBERT', label: 'Edbert' },
  { value: 'KAKIGORIRONIN', label: 'Kakigori Ronin' },
  { value: 'KAHN', label: 'Kahn' },
  { value: 'MOMMA', label: 'Momma' },
  { value: 'SRDUFFY', label: 'Sr. Duffy' },
  { value: 'YUKA', label: 'Yuka' },
  { value: 'BOBBI', label: 'Bobbi' },
  { value: 'JOEY', label: 'Joey' },
  { value: 'SYBIL', label: 'Sybil' },
  { value: 'NEMO', label: 'Nemo' },
  { value: 'DAX', label: 'Dax' },
  { value: 'MARGARET', label: 'Margaret' },
  { value: 'ROCCO', label: 'Rocco' },
  { value: 'PEACHY', label: 'Peachy' }
]

class LeftParticipantDropdown extends Component {
  render() {
    return (
      <Select
        isMulti
        name="leftParticipants"
        value={this.props.leftParticipants}
        options={characters}
        onChange={this.props.onChange}
      />
    )
  }
};

export default LeftParticipantDropdown;



