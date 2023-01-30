import { Avatar, Button, ContactCard, ShoppingCart } from './components';

export default function App() {
  function shoutSentence(sentence: string): string {
    return sentence.toUpperCase();
  }

  return (
    <>
      {/* <ContactCard />
      <Button status="cancel">Cancel</Button>
      <Button status="confirm">Confirm</Button>
      <Avatar /> */}
      <ShoppingCart />
    </>
  );
}
//
