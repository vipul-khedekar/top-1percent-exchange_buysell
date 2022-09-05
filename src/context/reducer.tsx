export function reducer(action, state) {
  if (action.type === `ADD`) {
    return {
      ...state,
      quantity: action.payload,
    };
  }

  return state;
}
