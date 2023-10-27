import React, { useEffect, useState } from 'react';
import './App.css';
import Amounts from './Amounts';
import Transactions from './Transactions';

function App() {
  const [transactions, setTransactions] = useState();
  const [amount, setAmount] = useState([]);
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [balance, setBalance] = useState(0);

  const handleClick = (data) => {
    const arrayAmount = [...amount];
    arrayAmount.push(data);
    setAmount(arrayAmount);
  }
  const handleChanges = (data) => {
    setTransactions(data)
  }

  const calculations = () => {
    let income = 0;
    let expense = 0;
    amount.map((amount) => {
      if (amount.type === "Expense") {
        expense += parseInt(amount.amount);
      } else {
        income += parseInt(amount.amount);
      }
    });
    setIncome(income);
    setExpense(expense);
    setBalance(income - expense);
  };

  useEffect(() => {
    calculations();
  }, [amount]);
// console.log(amount);
  return (
    <div className="h-[100vh] App flex flex-col items-center my-10 ">
      <h1 className='text-4xl font-extrabold'>Expense Tracker</h1>
      <Amounts handleAddTransaction={handleClick} Expense={expense} Income={income} Balance = {balance}/>
      <Transactions Amounts={amount} />
    </div>
  );
}

export default App;
