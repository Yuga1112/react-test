import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';

// const div = styled.div`
//   width: 400px;
//   margin: 0 auto;
//   padding: 20px;
// `;



const Todo = ({ type }) => {

  const [input, setInput] = useState('');

  const todolist = useSelector((state) => state.todolist);

  const dispatch = useDispatch();

  
  const add = () => {
    if (!input || isNaN(input)) return;

    dispatch({
      type: 'ADD',
      text: input,
      transactionType: type
    });
    

    setInput('');
  };

  return (
    <div>
      <span>금액</span>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0"
      />
      <button onClick={add}>등록</button>
      
      <ul>
        {todolist.map(todo => (
          <li key={todo.id}>
            [{todo.transactionType === 'income' ? '수입' : '지출'}]
            {todo.text}
            <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo