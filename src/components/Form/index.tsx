import React from 'react';

export function Form() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [value, setValue] = React.useState('');

  return (
    <>
      <form>
        <fieldset>
          <legend>What is your favorite color?</legend>
          <select
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </fieldset>
      </form>
      <p>Selected value: {selectedOption}</p>

      {/* RADIO BUTTONS */}

      <form action="">
        <fieldset>
          <legend>Do you agree?</legend>
          <label>
            <input
              type="radio"
              name="agreed-to-terms"
              value="yes"
              checked={value === 'yes'}
              onChange={(event) => setValue(event.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agreed-to-terms"
              value="no"
              checked={value === 'no'}
              onChange={(event) => setValue(event.target.value)}
            />
            No
          </label>
        </fieldset>
      </form>
      <p>Selected value: {value}</p>
    </>
  );
}
