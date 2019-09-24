export const ADD_ALL_SYSTEMS = "Anatomy/AddAllSystems";
export const TOGGLE_SYSTEM = "Anatomy/ToggleSystem";

export function addAllSystems(systems) {
  return {
    type: ADD_ALL_SYSTEMS,
    payload: {
      ...systems
    }
  };
}

export function toggleSystem(system) {
  return {
    type: TOGGLE_SYSTEM,
    payload: {
      system
    }
  };
}
