import Avatar from './components/Avatar';
import Button from './components/Button';
import ContactCard from './components/ContactCard';

export default function App() {
  function shoutSentence(sentence: string): string {
    return sentence.toUpperCase();
  }

  return (
    <>
      <ContactCard />
      <Button status="cancel">Cancel</Button>
      <Button status="confirm">Confirm</Button>
      <Avatar/>
    </>
  );
}
//
