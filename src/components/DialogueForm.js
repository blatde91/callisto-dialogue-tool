import React, { Fragment, Component } from "react";
import 'materialize-css';
import { Button, Card, Row, Col, CardPanel} from 'react-materialize';
import InitDialogueForm from "./InitDialogueForm";
import ScriptBuilder from "./ScriptBuilder";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Editor from 'react-simple-code-editor';

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
    lineNumber: 0,
    dialogueCreate: false,
    dialogueInCode: ''
  }
  
  handleInputChange = e => {
    let {value, name} = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(this.state)
  }

  handleLeftDropdownChange = (leftParticipants) => {
    this.setState({leftParticipants})
  }

  handleRightDropdownChange = (rightParticipants) => {
    this.setState({rightParticipants});
  };

  handleInitialDialogueSubmit = () => {
    this.getAvailableSpeakers();
    this.setState({
      initScript: true
    })
  }

  handleSpeakerChange = (activeSpeaker) => {
    this.setState({activeSpeaker});
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

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.dialogueInCode)
  }

  handleNewLineClick = () => {
    const scriptChunk = {
      activeSpeaker: this.state.activeSpeaker,
      textToSpeak: this.state.textToSpeak,
      leftPortraits: this.state.leftPortraits,
      rightPortraits: this.state.rightPortraits,
      lineNumber: this.state.lineNumber
    }
    const scriptChunks = this.state.scriptChunks;
    scriptChunks.push(scriptChunk);
    this.setState({
      scriptChunks,
      textToSpeak: '',
      lineNumber: this.state.lineNumber + 1
    }, () => console.log(this.state));


  }

  createDialogue = () => {
    
    let dialogueBlock = []
    this.state.scriptChunks.map(item => {
      dialogueBlock.push(`
      ///Line ${item.lineNumber}
      myText[i] = "${item.textToSpeak}";
      mySpeaker[i] = ${item.activeSpeaker.value};
      leftPortrait[i] = [${item.leftPortraits.map(item => {return item.value})}];
      rightPortrait[i] = [${item.rightPortraits.map(item => {return item.value})}];
      i++;
      `
      )
      return dialogueBlock
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