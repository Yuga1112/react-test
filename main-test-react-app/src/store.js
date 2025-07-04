import { createStore } from "redux";

const start = {
  listList: []
};


function reducer(state = start, action) {

  let newState = { ...state };
  let list = newState.listList;

  switch (action.type) {
    case 'ADD': {
      const newId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
      const amount = parseInt(action.text);
      const type = action.transactionType
      
      const newItem = {
        id: newId,
        text: amount,
        transactionType: type
      };

      newState.listList = [...list, newItem];

      newState.total += type === 'income' ? amount : -amount;
      return newState;
    }


    case 'DELETE': {
      const itemToDelete = list.find((item) => item.id === action.id);
      if (itemToDelete) {
        const amount = itemToDelete.transactionType === 'income' ? itemToDelete.text : -itemToDelete.text;
        newState.total -= amount;  
      }
      newState.listList = list.filter((item) => item.id !== action.id);
      return newState;
    }
    default: return state;

}
}

const store = createStore(reducer);

export default store;
