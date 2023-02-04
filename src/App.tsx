import { Avatar, Badges, Button, ContactCard, RangeEx, ShoppingCart } from './components';

export default function App() {
  function doSomething() {
    console.log('clicked');
  }

  return (
    <>
      {/* <ContactCard /> */}
      {/* <Button status="cancel">Cancel</Button> */}
      {/* <Button status="confirm">Confirm</Button> */}
      {/* <Avatar /> */}
      {/* <ShoppingCart /> */}
      {/* <Badges/> */}
      {/* <RangeEx /> */}
      <button onClick={doSomething}>click</button>
    </>
  );
}
