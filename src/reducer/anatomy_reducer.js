import { ADD_ALL_SYSTEMS, TOGGLE_SYSTEM } from "../actions/anatomy_actions";

const anatomy = {
  Heart: true,
  Lungs: true,
  Muscles: true,
  Nervous: true,
  Skeleton: true,
  Skin: true,
  Stomach: true,
}

export default function anatomyReducer(state = anatomy, action) {
  let newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL_SYSTEMS:
      newState = { ...newState, ...payload };
      break;
    case TOGGLE_SYSTEM:
      newState = {
        ...newState,
        [payload.system]: !newState[payload.system],
        Skin: payload.system !== "Skin" ? false : !newState[payload.system]
      };
      break;

    default:
      break;
  }
  return newState;
}
