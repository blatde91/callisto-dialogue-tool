import React, { Component } from 'react'
import SpeakerDropdown from './SpeakerDropdown';
import 'materialize-css';
import { Textarea, Switch } from 'react-materialize';
import ReactionDropdown from './ReactionDropdown';
import AddNewLineButton from './AddNewLineButton';


class ScriptBuilder extends Component {


  render() {
    return (
      <div className='container '>
        <div className='row'>
          <div className="row card-panel grey lighten-1">
            <h3>{`Line ${this.props.lineNumber}`}</h3>
            <div className="col m6 s3">
              <h6>Speaker</h6>
              <SpeakerDropdown 
                activeSpeaker={this.props.activeSpeaker}
                availableSpeakers={this.props.availableSpeakers}
                onChange={this.props.handleSpeakerChange}
              />
            </div>
            <div className="col m3 s3">
                <div className="col m3 s3">
                  <h6>Gets Interrupted?</h6>
                  <label>
                    <input type="checkbox" id="getsInterrupted" class="filled-in" checked={this.props.getsInterrupted} onChange={this.props.handleCheckboxChange}/>
                    <span style={{color: "black"}}>Yes</span>
                  </label>
                </div>
                
            </div>
            <div className="col m3 s3">
              <h6>Textbox Style</h6>
              <div className="row">
                <div className="col">
                <label>
                  <input type="radio" class="with-gap" name="default" checked={this.props.textboxStyle === 'default'} onChange={() => this.props.handleRadioChange("default")}/>
                  <span style={{color: "black"}}>default</span>
                </label>
                </div>
                <div className="col">
                <label>
                  <input type="radio" class="with-gap" name="radio" checked={this.props.textboxStyle === 'radio'} onChange={() => this.props.handleRadioChange("radio")}/>
                  <span style={{color: "black"}}>radio</span>
                </label>
                </div>
              </div>
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
                <h6>Left Portraits</h6>
                <ReactionDropdown
                  onChange={this.props.handleLeftPortraitsChange}
                  portraits={this.props.leftPortraits}
                  participants={this.props.leftParticipants}
                />
              </div>
              <div className="col s6">
                <h6>Right Portraits</h6>
                <ReactionDropdown
                  onChange={this.props.handleRightPortraitsChange}
                  portraits={this.props.rightPortraits}
                  participants={this.props.rightParticipants}
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
