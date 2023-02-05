import React from 'react';

import {
  Avatar,
  Badges,
  Button,
  ContactCard,
  CountryPicker,
  Form,
  RangeEx,
  ShoppingCart,
  TwoFactor,
} from './components';

export default function App() {
  // function doSomething() {
  //   console.log('clicked');
  // }

  //   const [count, setCount ] = React.useState(0)

  // function handleClick () {
  //   setCount(count + 1)
  // }

  // const title = 'React';

  // console.log(Math.round(Math.random()*100))

  return (
    <>
      {/* <ContactCard /> */}
      {/* <Button status="cancel">Cancel</Button> */}
      {/* <Button status="confirm">Confirm</Button> */}
      {/* <Avatar /> */}
      {/* <ShoppingCart /> */}
      {/* <Badges/> */}
      {/* <RangeEx /> */}
      {/* <button onClick={doSomething}>click</button>
      <button onClick={() => console.log('click')}>click arrowge</button> */}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/* <button onClick={handleClick}>{count}</button> */}
      {/* <Form /> */}
      <CountryPicker />
      <TwoFactor/>
    </>
  );
}
