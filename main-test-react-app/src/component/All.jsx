import React from 'react'
import { useSelector } from 'react-redux';

const All = () => {

  const listList = useSelector((state) => state.listList);

  const total = listList.reduce((sum, item) => {
        const amount = parseInt(item.text, 10);
        if (isNaN(amount)) return sum;
        return sum + (item.transactionType === 'income' ? amount : -amount);
    }, 0);

  return (
    <div>
        <h5>
            총  {total.toLocaleString()} 원
        </h5>
    </div>
  )
}

export default All