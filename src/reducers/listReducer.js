import listAction from '../actions/listAction';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    title: 'El chris se la come',
    description: 'Tambien le apesta la cola',
    check: true,
    id: uuidv4(),
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case listAction.ADD:
      const { item } = action.payload;
      return [
        ...state,
        {
          ...item,
          id: uuidv4(),
          check: false,
        },
      ];
    case listAction.REMOVE:
      return [
        ...state.filter((item) => {
          if (item.id === action.payload.id) {
            return false;
          }
          return true;
        }),
      ];
    case listAction.UPDATE:
      return [
        ...state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
      ];
    default:
      return state;
  }
};

export default listReducer;
