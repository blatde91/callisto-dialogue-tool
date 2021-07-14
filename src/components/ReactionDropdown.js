import React, { Component } from 'react';
import 'materialize-css';
import Select from 'react-select';

const options = [
  {
    label: "Hiro",
    options: [
      {
        label: "HiroNeutral", value: "sChatNeutral"
      }
    ]
  },
  {
    label: "Jackie",
    options: [
      {
        label: "JackieNeutral", value: "sJackieNeutral"
      }
    ]
  },
  {
    label: "Shorts",
    options: [
      {
        label: "ShortsNeutral", value: "sShortsNeutral"
      }
    ]
  },
  {
    label: "Chet",
    options: [
      {
        label: "ChetChill", value: "sChetChill"
      }
    ]
  },
  {
    label: "Riley",
    options: [
      {
        label: "RileyNeutral", value: "sRileyChatNeutral"
      }
    ]
  },
  {
    label: "Akari",
    options: [
      {
        label: "AkariNeutral", value: "sAkariChatNeutral"
      }
    ]
  },
  {
    label: "Veronica",
    options: [
      {
        label: "VeronicaNeutral", value: "sVeronicaNeutral"
      }
    ]
  },
  {
    label: "Yojimbo",
    options: [
      {
        label: "YojimboNeutral", value: "sYojimboNeutral"
      }
    ]
  },
  {
    label: "Rival",
    options: [
      {
        label: "RivalNeutral", value: "sRivalNeutral"
      }
    ]
  },
  {
    label: "Edbert",
    options: [
      {
        label: "EdbertNeutral", value: "sEdbertChatNeutrallyAngry"
      }
    ]
  },
  {
    label: "Kakigori Ronin",
    options: [
      {
        label: "KakigoriRoninNeutral", value: "sKakiChatNeutral"
      }
    ]
  },
  {
    label: "Kahn",
    options: [
      {
        label: "KahnNeutral", value: "sKahnChatNeutral"
      }
    ]
  },
  {
    label: "Momma Rocco",
    options: [
      {
        label: "MommaNeutral", value: "sMommaRoccoNeut"
      }
    ]
  },
  {
    label: "Sr. Duffy",
    options: [
      {
        label: "SrDuffyNeutral", value: "sSrDuffyChatNeutral"
      }
    ]
  },
  {
    label: "Yuka",
    options: [
      {
        label: "YukaNeutral", value: "sYukaNeutral"
      }
    ]
  },
  {
    label: "Bobbi",
    options: [
      {
        label: "BobbiNeutral", value: "sBobbiChatNeut"
      }
    ]
  },
  {
    label: "Joey",
    options: [
      {
        label: "JoeyNeutral", value: "sJoeyThunderChatNeutral"
      }
    ]
  },
  {
    label: "Sybil",
    options: [
      {
        label: "SybilNeutral", value: "sSybilChatNeutral"
      }
    ]
  },
  {
    label: "Nemo",
    options: [
      {
        label: "NemoNeutral", value: "sNemoUnNeut"
      }
    ]
  },
  {
    label: "Dax",
    options: [
      {
        label: "DaxNeutral", value: "sDaxChatNeutral"
      }
    ]
  },
  {
    label: "Margaret",
    options: [
      {
        label: "MargaretNeutral", value: "sMargaretChatNeutral"
      }
    ]
  },
  {
    label: "Rocco",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  }
]

class ReactionDropdown extends Component {
  render() {
    return (
      <Select
        isMulti
        name="leftParticipants"
        value={this.props.leftParticipants}
        options={options}
        onChange={this.props.onChange}
      />
    )
  }
};

export default ReactionDropdown;