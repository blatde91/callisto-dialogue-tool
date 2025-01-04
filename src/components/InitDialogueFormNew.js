import React, { Component } from 'react';
import 'materialize-css';
import { Button, Card, Row, Col, CardPanel, Dropdown} from 'react-materialize';
import ParticipantDropdown from './ParticipantDropdown';

class InitDialogueFormNew extends Component {


  render() {
    return (
      <div className='row card-panel grey lighten-1'>
        <div className='row m12'>
          <div className='col m12 s12 center-align'>
            <label htmlFor="participants">Script Name (useCamelCase): </label>
            <input
              id="scriptName"
              name="scriptName"
              type="string"
              placeholder="useCamelCaseNerd"
              value={this.props.scriptName}
              onChange={this.props.onInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InitDialogueForm;
