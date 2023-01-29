export default function ContactCard() {
  const data = [
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
    <ul>
      {data.map((contact) => (
        <li className="contact-card" key={crypto.randomUUID()}>
          <h2>{contact.name}</h2>
          <dl>
            <dt>Job</dt>
            <dd>{contact.job}</dd>
            <dt>Email</dt>
            <dd>{contact.email}</dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}
