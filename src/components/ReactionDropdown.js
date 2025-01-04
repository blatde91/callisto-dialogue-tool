import React, { Component } from 'react';
import 'materialize-css';
import Select from 'react-select';
import { reactions } from '../data/reactions';

const options = [
  {
    label: "Hiro",
    value: 'HIRO',
    options: [
      {
        label: "HiroNeutral", value: "sChatNeutral"
      }
    ]
  },
  {
    label: "Jackie",
    value: 'JACKIE',
    options: [
      {
        label: "JackieNeutral", value: "sJackieNeutral"
      }
    ]
  },
  {
    label: "Shorts",
    value: "SHORTS",
    options: [
      {
        label: "ShortsNeutral", value: "sShortsNeutral"
      }
    ]
  },
  {
    label: "Chet",
    value: "CHET",
    options: [
      {
        label: "ChetChill", value: "sChetChill"
      }
    ]
  },
  {
    label: "Riley",
    value: "RILEY",
    options: [
      {
        label: "RileyNeutral", value: "sRileyChatNeutral"
      }
    ]
  },
  {
    label: "Akari",
    value: "AKARI",
    options: [
      {
        label: "AkariNeutral", value: "sAkariChatNeutral"
      }
    ]
  },
  {
    label: "Veronica",
    value: "VERONICA",
    options: [
      {
        label: "VeronicaNeutral", value: "sVeronicaNeutral"
      }
    ]
  },
  {
    label: "Yojimbo",
    value: "YOJIMBO",
    options: [
      {
        label: "YojimboNeutral", value: "sYojimboNeutral"
      }
    ]
  },
  {
    label: "Rival",
    value: "RIVAL",
    options: [
      {
        label: "RivalNeutral", value: "sRivalNeutral"
      }
    ]
  },
  {
    label: "Edbert",
    value: "EDBERT",
    options: [
      {
        label: "EdbertNeutral", value: "sEdbertChatNeutrallyAngry"
      }
    ]
  },
  {
    label: "Kakigori Ronin",
    value: "KAKIGORIRONIN",
    options: [
      {
        label: "KakigoriRoninNeutral", value: "sKakiChatNeutral"
      }
    ]
  },
  {
    label: "Khan",
    value: "KHAN",
    options: [
      {
        label: "KhanNeutral", value: "sKhanChatNeutral"
      }
    ]
  },
  {
    label: "Momma Rocco",
    value: "MOMMA",
    options: [
      {
        label: "MommaNeutral", value: "sMommaRoccoNeut"
      }
    ]
  },
  {
    label: "Sr. Duffy",
    value: "SRDUFFY",
    options: [
      {
        label: "SrDuffyNeutral", value: "sSrDuffyChatNeutral"
      }
    ]
  },
  {
    label: "Yuka",
    value: "YUKA",
    options: [
      {
        label: "YukaNeutral", value: "sYukaNeutral"
      }
    ]
  },
  {
    label: "Bobbi",
    value: "BOBBI",
    options: [
      {
        label: "BobbiNeutral", value: "sBobbiChatNeut"
      }
    ]
  },
  {
    label: "Joey",
    value: "JOEY",
    options: [
      {
        label: "JoeyNeutral", value: "sJoeyThunderChatNeutral"
      }
    ]
  },
  {
    label: "Sybil",
    value: "SYBIL",
    options: [
      {
        label: "SybilNeutral", value: "sSybilChatNeutral"
      }
    ]
  },
  {
    label: "Nemo",
    value: "NEMO",
    options: [
      {
        label: "NemoNeutral", value: "sNemoUnNeut"
      }
    ]
  },
  {
    label: "Dax",
    value: "DAX",
    options: [
      {
        label: "DaxNeutral", value: "sDaxChatNeutral"
      }
    ]
  },
  {
    label: "Margaret",
    value: "MARGARET",
    options: [
      {
        label: "MargaretNeutral", value: "sMargaretChatNeutral"
      }
    ]
  },
  {
    label: "Rocco",
    value: "ROCCO",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Hermit",
    value: "HERMIT",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Bushka",
    value: "BUSHKA",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Tony",
    value: "TONY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Gosh",
    value: "GOSH",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Camille",
    value: "CAMILLE",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Shallow Mouth",
    value: "SMOUTH",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Beach Guy",
    value: "BEACHGUY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Dizzy",
    value: "DIZZY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Benton",
    value: "BENTON",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Dekko",
    value: "DEKKO",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Jenny",
    value: "JENNY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Barb",
    value: "BARB",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Daniel",
    value: "DANIEL",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Ian",
    value: "IAN",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "John",
    value: "JOHN",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Jeff",
    value: "JEFF",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Doc",
    value: "DOC",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Murphy",
    value: "MURPHY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Kenny",
    value: "KENNY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Reporter",
    value: "REPORTER",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "One-armed Boy",
    value: "ONEARMEDBOY",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Rynn",
    value: "RYNN",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Babe Ruth",
    value: "BABERUTH",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Doc Radio",
    value: "DOC_RADIO",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Mysterious Man",
    value: "MYSTERIOUSMAN",
    options: [
      {
        label: "RoccoNeutral", value: "sRoccoGChatNeutral"
      }
    ]
  },
  {
    label: "Peachy",
    value: "PEACHY",
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
        name="participants"
        defaultValue={this.props.participants}
        value={this.props.portraits}
        options={reactions}
        onChange={this.props.onChange}
      />
    )
  }
};

export default ReactionDropdown;