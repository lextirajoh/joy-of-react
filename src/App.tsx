import Button from './components/Button';
import ContactCard from './components/ContactCard';

export default function App() {
  function shoutSentence(sentence: string): string {
    return sentence.toUpperCase();
  }

  const contactList = [
    {
      id: 1,
      name: 'Sunita Kumar',
      job: 'Electrical Engineer',
      email: 'sunita.kumar@acme.co',
    },
    {
      id: 2,
      name: 'Henderson G. Sterling II',
      job: 'Receptionist',
      email: 'henderson-the-second@acme.co',
    },
    {
      id: 3,
      name: 'Aoi Kobayashi',
      job: 'President',
      email: 'kobayashi.aoi@acme.co',
    },
  ];

  return (
    <>
      <ContactCard contactList={contactList} />
      <Button status="cancel">Cancel</Button>
      <Button status="confirm">Confirm</Button>
    </>
  );
}
//
