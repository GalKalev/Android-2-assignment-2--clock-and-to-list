

import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";


function App() {

  // const expense = [
  //   { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
  //   { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
  //   { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
  //   { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },

  // ];
  const [expense, setExpense] = useState([
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },

  ]);


  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  

  return (
    <div>
      <ExpenseForm expense={expense} setExpense={setExpense} />
      <Expenses items={expense} />

    </div>

  );
}

export default App;
