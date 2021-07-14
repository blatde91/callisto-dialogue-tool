import React, { Component } from 'react';
import 'materialize-css';
import { Button, Card, Row, Col} from 'react-materialize';
import Select from 'react-select';

class SpeakerDropdown extends Component {

  render() {
    return (
      <Select
        name="speakerDropdown"
        value={this.props.activeSpeaker}
        options={this.props.availableSpeakers}
        onChange={this.props.onChange}
      />
    )
  }
};

export default SpeakerDropdown;