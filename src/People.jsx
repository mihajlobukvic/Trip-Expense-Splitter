import Body from "./Body";

export default function People({
  items,
  name,
  setName,
  handleButtonClick,
  editIndex,
  editText,
  setEditText,
  handleEditClick,
  handleSaveClick,
}) {
  return (
    <div>
      <Body title="People">
        {items.length === 0 ? (
          <p className="sentence2">No one added yet.</p>
        ) : (
          <ul className="people-list">
            {items.map((item, index) => (
              <li key={index} className="people-item">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="edit-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button
                      className="save-btn"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span className="name-display">{item}</span>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(index, item)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleButtonClick}>Add</button>
        </div>
      </Body>
    </div>
  );
}