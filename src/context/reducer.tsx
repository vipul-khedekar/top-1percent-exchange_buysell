type ReducerActions = {
  action: object;
  type: string;
};

export function reducer(action: ReducerActions, state: object) {
  switch (action.type) {
    case `ADD_ITEM`:
      return state;

    default:
      return state;
  }
}
