import React from 'react';

export default function AddNewItemForm({ handleAddItem }) {
  const [input, setInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleAddItem(input);
    setInput('');
  }

  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">New item:</label>
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
