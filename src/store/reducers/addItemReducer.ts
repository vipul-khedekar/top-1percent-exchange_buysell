export interface AddItemState {
  quantity: number;
}

type Action = { type: `ADD_ITEM`; payload: number };

const initialState = {
  quantity: 0,
};

export function addItemReducer(
  state: AddItemState = initialState,
  action: Action
) {
  switch (action.type) {
    case `ADD_ITEM`: {
      return {
        ...state,
        quantity: action.payload,
      };
    }

    default:
      return state;
  }
}
