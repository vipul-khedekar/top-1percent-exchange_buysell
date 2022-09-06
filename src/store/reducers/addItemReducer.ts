export interface AddItemState {
  quantity: number;
  cartItems: Array<any>;
}

type Action = {
  type: string;
  payload: number;
  item: Array<any>;
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
        cartItems: action.item,
      };
    }

    case `REMOVE_ITEM`: {
      return {
        ...state,
        quantity: action.payload,
        cartItems: action.item,
      };
    }

    default:
      return state;
  }
}
