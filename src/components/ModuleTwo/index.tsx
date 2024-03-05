'use client';

import * as React from 'react';

export const ModuleTwo = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)} className='bg-slate-400 w-fit'>
        Click me
      </button>
    </>
  );
};
