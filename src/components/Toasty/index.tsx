import React from 'react';

import styles from './Toasty.module.css';

export function Toasty() {
  const wrapperRef = React.useRef();
    React.useEffect(() => {
    console.log('wrapperRef', wrapperRef.current);
  }, []);
  const [isShown, setIsShown] = React.useState(false);



  // This CSS value will control whether the ghost is
  // visible or not.
  const translateX = isShown ? '0%' : '100%';

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}