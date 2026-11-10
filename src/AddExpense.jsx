import Body from "./Body";

export default function AddExpense({
  items,
  expenseDescritpion,
  setExpenseDescription,
  expenseAmount,
  setExpenseAmount,
  expensePaidBy,
  setExpensePaidBy,
  handleAddExpenseClick,
}) {
  return (
    <Body title="Add expense">
      {items.length === 0 ? (
        <p className="sentence">Add people to the trip first.</p>
      ) : (
        <div className="expense-form">
          <input
            type="text"
            placeholder="What was it? e.g. Dinner"
            className="firstinput"
            value={expenseDescritpion}
            onChange={(e) => setExpenseDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (€)"
            className="secondinput"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />

          <select
            value={expensePaidBy}
            onChange={(e) => setExpensePaidBy(e.target.value)}
          >
            {items.map((person, index) => (
              <option key={index} value={person}>
                Paid by {person}
              </option>
            ))}
          </select>

          <button className="button2" onClick={handleAddExpenseClick}>
            Add expense
          </button>
        </div>
      )}
    </Body>
  );
}