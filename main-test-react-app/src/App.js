import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './component/Todo';
import Tndlq from './component/Tndlq';


import { useState } from 'react';
import All from './component/All';

const start = {
  todolist: []
};

function reducer(state = start, action) {

    switch (action.type) {
      case 'ADD': {
        const newId = state.todolist.length > 0
          ? state.todolist[state.todolist.length - 1].id + 1
          : 0;

        const newList = [
          ...state.todolist,
          { id: newId, text: action.text, transactionType: action.transactionType }
        ];

        return { ...state, todolist: newList };
      }
    case 'DELETE': {
      const newList = state.todolist.filter(todo => todo.id !== action.id);
      return { ...state, todolist: newList };
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
        <Todo type={type} />
        <All></All>
      </Provider>
    </div>
  );
}

export default App;
