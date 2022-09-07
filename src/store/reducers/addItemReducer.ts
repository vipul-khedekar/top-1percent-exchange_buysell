export interface AddItemState {
  quantity: number;
  cartItems: Array<any>;
  listings: Array<any>;
}

type Action = {
  type: string;
  payload: number;
  item: Array<any>;
  listItems: Array<any>;
};

const initialState = {
  quantity: 0,
  cartItems: [],
  listings: [],
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

    case `ADD_LISTING`: {
      return {
        ...state,
        listings: action.listItems,
      };
    }

    case `REMOVE_LISTINGS`: {
      return {
        ...state,
        listings: action.listItems,
      };
    }

    default:
      return state;
  }
}
