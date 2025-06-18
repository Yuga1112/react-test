import React from 'react';

import Form from 'react-bootstrap/Form';


const Tndlq = ({ type, setType }) => {


    return (
        <Form.Group className="mb-3" controlId="member.role">
            <Form.Check
                type="radio"
                label="수입"
                id="income"
                name="money"
                value="income"
                checked={type === 'income'}
                onChange={(e) => setType(e.target.value)}
            />
            <Form.Check
                type="radio"
                label="지출"
                id="expense"
                name="money"
                value="expense"
                checked={type === 'expense'}
                onChange={(e) => setType(e.target.value)}
            />
        </Form.Group> 
    );
};

export default Tndlq;
