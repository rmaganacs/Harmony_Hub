import { SET_SELECTED_AUDIO_ID } from "./actions";

interface AudioIdState {
  selectedAudioId: string;
}

const initialState: AudioIdState = {
  selectedAudioId: '',
};

const audioIdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_AUDIO_ID:
      return { ...state, selectedAudioId: action.payload };
    default:
      return state;
  }
};

export default audioIdReducer;
