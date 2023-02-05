import React from 'react';

const CORRECT_CODE = '123456';

export function TwoFactor() {
  const [code, setCode] = React.useState('');

  function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code === CORRECT_CODE) {
      window.alert('Code correct');
    }
    window.alert('Code not correct');
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="auth-code">Enter authorization code:</label>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <button>Validate</button>
        </div>
      </form>
    </>
  );
}
