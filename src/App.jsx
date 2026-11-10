import Header from "./Header";
import { useState } from "react";
import People from "./People";
import Expenses from "./Expenses";
import AddExpense from "./AddExpense";
import Balances from "./Balances";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const [expenseDescritpion, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expensePaidBy, setExpensePaidBy] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handleButtonClick() {
    if (name.trim() !== "") {
      setItems([...items, name]);
      setName("");
    }
  }

  function handleEditClick(index, currentName) {
    setEditIndex(index);
    setEditText(currentName);
  }

  function handleSaveClick(index) {
    if (editText.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[index] = editText;
      setItems(updatedItems);
      setEditIndex(null);
      setEditText("");
    }
  }

  function handleAddExpenseClick() {
    if (expenseDescritpion.trim() !== "" && expenseAmount !== "") {
      const newExpense = {
        description: expenseDescritpion,
        amount: expenseAmount,
        paidBy: expensePaidBy || items[0],
      };
      setExpenses([...expenses, newExpense]);
      setExpenseDescription("");
      setExpenseAmount("");
    }
  }

  return (
    <div>
      <Header />
      <div className="firsttwo">
        <People
          items={items}
          name={name}
          setName={setName}
          handleButtonClick={handleButtonClick}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
        />

        <Expenses expenses={expenses} />
      </div>
      <div className="secondtwo">
        <AddExpense
          items={items}
          expenseDescritpion={expenseDescritpion}
          setExpenseDescription={setExpenseDescription}
          expenseAmount={expenseAmount}
          setExpenseAmount={setExpenseAmount}
          expensePaidBy={expensePaidBy}
          setExpensePaidBy={setExpensePaidBy}
          handleAddExpenseClick={handleAddExpenseClick}
        />
        <Balances expenses={expenses} items={items} />
      </div>
    </div>
  );
}
