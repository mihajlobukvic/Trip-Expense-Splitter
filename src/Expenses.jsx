import Body from "./Body";

export default function Expenses({ expenses }) {
  return (
    <Body title="Expenses">
      {expenses.length === 0 ? (
        <p className="sentence">No expenses yet.</p>
      ) : (
        <div>
          <ul className="expenses-list">
            {expenses.map((exp, index) => (
              <li key={index} className="expense-item">
                <div>
                  <p className="exp-desc">{exp.description}</p>
                  <p className="exp-payer">paid by {exp.paidBy}</p>
                </div>
                <span className="exp-amount">
                  €{Number(exp.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="expenses-total">
            <span>Total </span>
            <span className="total-amount">
              €
              {expenses
                .reduce((sum, exp) => sum + Number(exp.amount), 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </Body>
  );
}