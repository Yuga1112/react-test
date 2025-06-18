import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List from './component/List';
import Tndlq from './component/Tndlq';


import { useState } from 'react';
import All from './component/All';

const start = {
  listList: []
};

function reducer(state = start, action) {

    switch (action.type) {
      case 'ADD': {
        const newId = state.listList.length > 0
          ? state.listList[state.listList.length - 1].id + 1
          : 0;

        const newList = [
          ...state.listList,
          { id: newId, text: action.text, transactionType: action.transactionType }
        ];

        return { ...state, listList: newList };
      }
    case 'DELETE': {
        const newList = state.listList.filter(list => list.id !== action.id);
        return { ...state, listList: newList };
    }
    default:
      return state;
  }
}
  
const store = createStore(reducer);

function App() {

  const [type, setType] = useState('income');

  return (
    <div>
      <h3>가계부</h3>


      <Provider store={store}>
        <Tndlq type={type} setType={setType} />
        <List type={type} />
        <All></All>
      </Provider>
    </div>
  );
}

export default App;
