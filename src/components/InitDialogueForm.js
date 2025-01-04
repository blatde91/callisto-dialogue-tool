import React, { Component } from 'react';
import 'materialize-css';
import { Button, Card, Row, Col, CardPanel, Dropdown} from 'react-materialize';
import LeftParticipantDropdown from './LeftParticipantDropdown';
import RightParticipantDropdown from './RightParticipantDropdown';

class InitDialogueForm extends Component {


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
        <div className='row m12'>
          <div className='col m6 s12'>
            <label htmlFor="participants">Left Participants</label>
            
            <LeftParticipantDropdown
              onChange={this.props.onLeftDropdownChange}
              leftParticipants={this.props.leftParticipants}
            />
          </div>
          <div className='col m6 s12 right-align'>
            <label htmlFor="participants">Right Participants</label>
            
            <RightParticipantDropdown
              onChange={this.props.onRightDropdownChange}
              rightParticipants={this.props.rightParticipants}
            />
          </div>
        </div>
        <div className='row center'>
          <Button
            disabled={this.props.leftParticipants === [] || this.props.rightParticipants === []}
            onClick={this.props.dialogueSubmit}
          >
            Start Dialogue Tool
          </Button>
        </div>
      </div>
    );
  }
}

export default InitDialogueForm;
