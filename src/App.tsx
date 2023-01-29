import ContactCard from './components/ContactCard';

export default function App() {
  function shoutSentence(sentence: string): string {
    return sentence.toUpperCase();
  }

  const contactList = [
    {
      name: 'Sunita Kumar',
      job: 'Electrical Engineer',
      email: 'sunita.kumar@acme.co',
    },
    {
      name: 'Henderson G. Sterling II',
      job: 'Receptionist',
      email: 'henderson-the-second@acme.co',
    },
    {
      name: 'Aoi Kobayashi',
      job: 'President',
      email: 'kobayashi.aoi@acme.co',
    },
  ];

  return (
    <>
      <ContactCard contactList={contactList} />
    </>
  );
}
//
