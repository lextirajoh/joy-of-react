import React from 'react';
import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

export function CountryPicker() {
  const [country, setCountry] = React.useState('');

  const countryNames = Object.entries(COUNTRIES);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label>
          Country:
          <select
            required
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}>
            <option value="">— Select Country—</option>
            <optgroup label="Countries">
              {countryNames.map(([id, label]) => (
                <option value={id} key={id}>
                  {label}
                </option>
              ))}
            </optgroup>
          </select>
        </label>
      </fieldset>

      <p className="country-display">Selected country: {COUNTRIES[country]}:</p>

      <button>Submit</button>
    </form>
  );
}
