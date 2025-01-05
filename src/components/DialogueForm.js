import React, { Fragment, Component } from "react";
import 'materialize-css';
import M from 'materialize-css';
import { Button, Card, Row, Col, CardPanel} from 'react-materialize';
import InitDialogueForm from "./InitDialogueForm";
import ScriptBuilder from "./ScriptBuilder";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Editor from 'react-simple-code-editor';
import { characters} from "../data/characters";
import { reactions } from "../data/reactions";

const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain
  }
}

class DialogueForm extends Component {


  state = {
    scriptName: '',
    leftParticipants: [],
    rightParticipants: [],
    initScript: false,
    availableSpeakers: [],
    scriptChunks: [],
    textToSpeak: '',
    activeSpeaker: {},
    leftPortraits: [],
    rightPortraits: [],
    namePosition: 2,
    textboxStyle: 'default',
    getsInterrupted: false,
    lineNumber: 0,
    dialogueCreate: false,
    dialogueInCode: '',
    staticInfoVisible: false
  }

  callToast = () => {
    
    var toastHTML = `Cannot add a 4th participant!`;
    M.toast({html: toastHTML});
  }
  
  handleInputChange = e => {
    let {value, name} = e.target;
    console.log(value)
    console.log(name)
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(this.state)
  }

  handleLeftDropdownChange = (leftParticipants) => {
    if(leftParticipants.length <= 3){
      this.setState({leftParticipants});

    } else{
      this.callToast();
    }
  }

  handleRightDropdownChange = (rightParticipants) => {
    if(rightParticipants.length <= 3){
      this.setState({rightParticipants}); 
    } else{
      this.callToast();
    }
  };

  handleInitialDialogueSubmit = () => {
    this.getAvailableSpeakers();
    this.populateLeftPortraitDefaults();
    this.populateRightPortraitDefaults();
    this.setState({
      initScript: true
    })
  }

  handleSpeakerChange = (activeSpeaker) => {
    var namePos = this.getNamePosition(activeSpeaker);
    this.setState({
      activeSpeaker: activeSpeaker,
      namePosition: namePos
    });
  }

  handleLeftPortraitsChange = (leftPortraits) => {
    this.setState({leftPortraits});
  }

  handleRightPortraitsChange = (rightPortraits) => {
    this.setState({rightPortraits});
  }

  getAvailableSpeakers = () => {
    let availableSpeakers = [];
    this.state.rightParticipants.map(part => availableSpeakers.push(part));
    this.state.leftParticipants.map(part => availableSpeakers.push(part));

    this.setState({availableSpeakers});

  }

  populateLeftPortraitDefaults = () => {
    var _mappingArr = this.state.leftParticipants;
    console.log(_mappingArr, "participants")
    var _arr = [];
    _mappingArr = _mappingArr.forEach(e => _arr.push(this.findMatchingObject(reactions, e)[0].options[0]));
    console.log(_arr, "arr to push")
    this.setState({
      leftPortraits: _arr
    })

  }

  populateRightPortraitDefaults = () => {
    var _mappingArr = this.state.rightParticipants;
    console.log(_mappingArr, "participants")
    var _arr = [];
    _mappingArr = _mappingArr.forEach(e => _arr.push(this.findMatchingObject(reactions, e)[0].options[0]));
    console.log(_arr, "arr to push")
    this.setState({
      rightPortraits: _arr
    })
    
  }


  handleCheckboxChange = e => {
    var checkboxId = e.target.id;
    var checkboxValue = e.target.checked;
    console.log(`checkboxVal: ${e.target.checked}`)

    this.setState({
      [checkboxId]: checkboxValue
    });
    console.log(this.state)

  }
  handleRadioChange = value => {

    console.log(`radioval: ${value}`)

    this.setState({
      textboxStyle: value
    });
    console.log(this.state)

  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.dialogueInCode)
  }

  handleNewLineClick = () => {
    
    const scriptChunk = {
      activeSpeaker: this.state.activeSpeaker,
      textToSpeak: this.state.textToSpeak,
      leftParticipants: this.state.leftParticipants,
      rightParticipants: this.state.rightParticipants,
      leftPortraits: this.state.leftPortraits,
      rightPortraits: this.state.rightPortraits,
      lineNumber: this.state.lineNumber,
      textboxStyle: this.state.textboxStyle,
      getsInterrupted: this.state.getsInterrupted,
      namePosition: this.state.namePosition
    }
    const scriptChunks = this.state.scriptChunks;
    scriptChunks.push(scriptChunk);
    this.setState({
      scriptChunks,
      textToSpeak: '',
      lineNumber: this.state.lineNumber + 1
    }, () => console.log(this.state));


  }

  handleFloatingButton = () => {
    var staticInfoVisible = this.state.staticInfoVisible;
    console.log('before swap', staticInfoVisible)
    staticInfoVisible = !staticInfoVisible;
    console.log('button clicked!!!', staticInfoVisible)
    this.setState({
      staticInfoVisible
    })
    
  }

  findMatchingObject = (array, label) => {
    console.log("obj to match", label)
    var _obj = array.filter(function (entry){
      return Object.keys(label).every(function (key){
        return entry[key] === label[key];
      })
    })
    return _obj;
  }

  findMatchingObjectIndexWithSpeaker = (array, speaker) => {
    console.log("speaker to match", speaker)
    let index = array.findIndex(o => o.value === speaker)
    if (index != undefined){
      return index;
    } else return false;
  }

  getNamePosition = (activeSpeaker) => {
    var namePos = 2;
    var skipSwitch2 = true;
    var leftIndex = this.findMatchingObjectIndexWithSpeaker(this.state.leftParticipants, activeSpeaker.value);
    var rightIndex = this.findMatchingObjectIndexWithSpeaker(this.state.rightParticipants, activeSpeaker.value);
    console.log('leftindex', leftIndex)
    console.log('this.state.leftpart', this.state.leftParticipants)
    console.log('rightindex', rightIndex)
    console.log('this.state.rightpart', this.state.rightParticipants)
    switch(leftIndex){
      case 0:
        if(this.state.leftParticipants.length === 1){
          namePos = 2;
        } else if(this.state.leftParticipants.length > 1){
          namePos = 1;
          
        }
      break;
      case 1:
        if(this.state.leftParticipants.length === 2){
          namePos = 3;
        } else { namePos = 2;}
      break;
      case 2:
        namePos = 3;
      break;
      case -1:
        console.log('going to check 2nd array')
        skipSwitch2 = false;
      break;
    }
    if(skipSwitch2 === false){
      switch(rightIndex){
        case 0:
          if(this.state.rightParticipants.length === 1){
            namePos = 6;
          } else if(this.state.rightParticipants.length > 1){
            namePos = 5;
          }
        break;
        case 1:
          if(this.state.rightParticipants.length === 2){
            namePos = 7;
          } else { namePos = 6;}
        break;
        case 2:
          namePos = 7;
        break;
        case -1:
          console.log("nobody home")
        break;
      }

    }
    console.log(namePos, "namePosition")
    return namePos;
    
  }

  createDialogue = () => {
    var skipNameplate = false;
    let dialogueBlock = []
    console.log('scriptchunks', this.state.scriptChunks)
    this.state.scriptChunks.map(item => {
      var dialogueString = 
      (`
      ///Line ${item.lineNumber}
      myText[i] = "${item.textToSpeak}";
      `
      )
      dialogueString = dialogueString.trim();

      var mySpeaker = '';
      if(item.activeSpeaker.value){
        mySpeaker = `mySpeaker[i] = ${item.activeSpeaker.value};`;
      } else {
        skipNameplate = true;
      }

      dialogueString = `
      ${dialogueString}
      ${mySpeaker}
      `
      dialogueString = dialogueString.trim();

      var leftPortrait = '';
      if(item.leftPortraits.length > 0){
        leftPortrait = `leftPortrait[i] = [${item.leftPortraits.map(item => {return item.value})}];`
      }

      dialogueString = `
      ${dialogueString}
      ${leftPortrait}
      `
      dialogueString = dialogueString.trim();

      var rightPortrait = '';
      if(item.rightPortraits.length > 0){
        rightPortrait = `rightPortrait[i] = [${item.rightPortraits.map(item => {return item.value})}];`
      }

      dialogueString = `
      ${dialogueString}
      ${rightPortrait}
      `
      dialogueString = dialogueString.trim();

      var textboxStyle = '';
      if(item.textboxStyle == 'radio'){
        textboxStyle = 'textboxStyle[i] = TEXTBOX_MAIN_STYLE.RADIO;'
      }

      dialogueString = `
      ${dialogueString}
      ${textboxStyle}
      `
      dialogueString = dialogueString.trim();

      var getsInterrupted = '';
      console.log('getsInterrupted', item.getsInterrupted);
      if(item.getsInterrupted){
        getsInterrupted = 'getsInterrupted[i] = true;'
      }

      dialogueString = `
      ${dialogueString}
      ${getsInterrupted}
      `
      dialogueString = dialogueString.trim();
      console.log(dialogueString)
      if(!skipNameplate){
        var namePosition;
        console.log('namepos', item.namePosition)
        if(item.namePosition == 2 && this.state.leftParticipants.length == 1){
          console.log('only part on left is speaker, default case')
        } else{
          console.log("writing name position")
          namePosition = `namePosition[i] = ${item.namePosition};`
        }
        dialogueString = `
      ${dialogueString}
      ${namePosition}
      `
        dialogueString = dialogueString.trim();
        console.log(dialogueString)

      }
      
      dialogueString = 
      `
      ${dialogueString}
      i++;
      `
      dialogueBlock.push(dialogueString);
      return dialogueBlock;
    })
    
    const dialogueInCode =
    `function ${this.state.scriptName}(){
      var i = 0;
      ${dialogueBlock.join('')}
    }`
    this.setState({
      dialogueInCode: dialogueInCode,
      dialogueCreate: true
    })
  }

  highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );

  onValueChange = code => {
    this.setState({
      dialogueInCode: code
    })
  }
  

  render() {
    return(
      <div style={{padding: 25}}className='container'>
        <div className='row center'>
          <h1 className='white-text'>Callisto Dialogue Tool</h1>
        </div>
        <div className="fixed-action-btn">
        {this.state.staticInfoVisible ?
        <>
          <div style={{padding: 10, backgroundColor: 'gray', margin: 4}}>
            <h3>Text Effects</h3>
            <p>[scale &lt;factor&gt;][/scale]</p>
            <p>[slant][/slant]</p>
            <p>[shake][/shake]</p>
          </div>
        </> : null}
          <Button className="btn-floating btn-large red" onClick={this.handleFloatingButton} className="large material-icons">I</Button>

        </div>
        
        <InitDialogueForm
          onInputChange={this.handleInputChange}
          onLeftDropdownChange={this.handleLeftDropdownChange}
          onRightDropdownChange={this.handleRightDropdownChange}
          scriptName={this.state.scriptName}
          leftParticipants={this.state.leftParticipants}
          rightParticipants={this.state.rightParticipants}
          dialogueSubmit={this.handleInitialDialogueSubmit}
        />
        {this.state.initScript ? (
          <>
            <ScriptBuilder
              lineNumber={this.state.lineNumber}
              addNewLine={this.handleNewLineClick}
              availableSpeakers={this.state.availableSpeakers}
              handleSpeakerChange={this.handleSpeakerChange}
              handleTextChange={this.handleInputChange}
              textToSpeak={this.state.textToSpeak}
              handleLeftPortraitsChange={this.handleLeftPortraitsChange}
              leftPortraits={this.state.leftPortraits}
              handleRightPortraitsChange={this.handleRightPortraitsChange}
              rightPortraits={this.state.rightPortraits}
              namePosition = {this.state.namePosition}
              getsInterrupted = {this.state.getsInterrupted}
              textboxStyle = {this.state.textboxStyle}
              handleCheckboxChange = {this.handleCheckboxChange}
              handleRadioChange = {this.handleRadioChange}
              leftParticipants = {this.state.leftParticipants}
              rightParticipants = {this.state.rightParticipants}
            />
            <div style={{paddingTop: 10, paddingBottom: 10}}>
              <Button
                onClick={this.createDialogue}
              >
                Create Script
              </Button>
            </div>
          </>
          )
        : null}
        
        

        {this.state.dialogueCreate ?  
        <>
          <Editor 
            value={this.state.dialogueInCode}
            onValueChange={this.onValueChange}
            highlight={this.highlight}
            padding={10}
            style={styles.root}
          />
          <div style={{paddingTop: 10}}>
            <Button onClick={this.copyToClipboard}>
              Copy script to clipboard
            </Button>
          </div>
        </>: null}

        

        
      </div>
    );
  }

}

export default DialogueForm;