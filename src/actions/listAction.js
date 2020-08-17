const listAction = {
  ADD: 'LIST_ACTION_ADD',
  REMOVE: 'LIST_ACTION_REMOVE',
  UPDATE: 'LIST_ACTION_UPDATE',
};

export const addItem = (item) => {
  return {
    type: listAction.ADD,
    payload: {
      item,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: listAction.REMOVE,
    payload: {
      id,
    },
  };
};

export const updateItem = (id) => {
  return {
    type: listAction.UPDATE,
    payload: {
      id,
    },
  };
};

export default listAction;
