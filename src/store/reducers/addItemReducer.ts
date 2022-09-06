export interface AddItemState {
  quantity: number;
  cartItems: Array<number>;
}

type Action = {
  type: string;
  payload: number;
  itemId: Array<number>;
};

const initialState = {
  quantity: 0,
  cartItems: [],
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
        cartItems: action.itemId,
      };
    }

    default:
      return state;
  }
}
