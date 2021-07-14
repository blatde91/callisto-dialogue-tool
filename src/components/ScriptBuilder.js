import React, { Component } from 'react'
import SpeakerDropdown from './SpeakerDropdown';
import { Textarea } from 'react-materialize';
import ReactionDropdown from './ReactionDropdown';
import AddNewLineButton from './AddNewLineButton';


class ScriptBuilder extends Component {


  render() {
    return (
      <div className='container '>
        <div className='row'>
          <div className="row card-panel grey lighten-1">
            <h3>{`Line ${this.props.lineNumber}`}</h3>
            <div className="col m12 s6">
              <h6>Speaker</h6>
              <SpeakerDropdown 
                activeSpeaker={this.props.activeSpeaker}
                availableSpeakers={this.props.availableSpeakers}
                onChange={this.props.handleSpeakerChange}
              />
            </div>
            <div className="col input-field m12 s6">
              <h6>Spoken Text</h6>
              <textarea
                type="string"
                id="textToSpeak"
                name="textToSpeak"
                style={{backgroundColor: "white"}}
                placeholder="type speaker text here"
                value={this.props.textToSpeak}
                onChange={this.props.handleTextChange}
              />
            </div>
            <div className="row">
              <div className="col s6">
                <h6>Left Particpants</h6>
                <ReactionDropdown
                  onChange={this.props.handleLeftPortraitsChange}
                  leftPortraits={this.props.leftPortraits}
                />
              </div>
              <div className="col s6">
                <h6>Right Participants</h6>
                <ReactionDropdown
                  onChange={this.props.handleRightPortraitsChange}
                  rightPortraits={this.props.rightPortraits}
                />
              </div>
            </div>
            <AddNewLineButton addNewLine={this.props.addNewLine}/>
          </div>
        </div>   
      </div>
    )
  }
}

export default ScriptBuilder;
