import Body from "./Body";

export default function Balances({ expenses, items }) {
  return (
    <Body title="Balances">
      {expenses.length === 0 ? (
        <p className="sentence">Shown after the first expense.</p>
      ) : (
        <div>
          <p className="balances-share">
            Each person's share: €
            {(
              expenses.reduce((sum, exp) => sum + Number(exp.amount), 0) /
              items.length
            ).toFixed(2)}{" "}
            (€
            {expenses
              .reduce((sum, exp) => sum + Number(exp.amount), 0)
              .toFixed(2)}{" "}
            ÷ {items.length})
          </p>
          <ul className="balances-list">
            {items.map((person, index) => {
              const paidTotal = expenses
                .filter((exp) => exp.paidBy === person)
                .reduce((sum, exp) => sum + Number(exp.amount), 0);
              const share =
                expenses.reduce((sum, exp) => sum + Number(exp.amount), 0) /
                items.length;
              const balance = paidTotal - share;
              return (
                <li key={index} className="balance-item">
                  <span className="balance-name">{person}</span>

                  <div className="balance-info">
                    <span className="balance-text">
                      {balance >= 0 ? "gets back" : "owes"}
                    </span>
                    <span
                      className={
                        balance >= 0 ? "balance-positive" : "balance-negative"
                      }
                    >
                      {balance >= 0
                        ? `+€${balance.toFixed(2)}`
                        : `-€${Math.abs(balance).toFixed(2)}`}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Body>
  );
}