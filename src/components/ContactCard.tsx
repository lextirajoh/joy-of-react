import React from 'react';

export default function ContactCard({ contactList }: IProps) {
  return (
    <ul>
      {contactList.map((contact) => (
        <li className="contact-card" key={contact.name}>
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

type IProps = {
  contactList: {
    name: string;
    job: string;
    email: string;
  }[];
};
