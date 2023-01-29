import React from 'react';

export default function Avatar() {
  const data = [
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/001.png',
      alt: 'person with curly hair and a black T-shirt',
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/002.png',
      alt: 'person wearing a hijab and glasses',
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/003.png',
      alt: 'person with short hair wearing a blue hoodie',
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/004.png',
      alt: 'person with a pink mohawk and a raised eyebrow',
    },
  ];

  return (
    <>
      {data.map((avatar) => (
        <button className="avatar-btn" key={crypto.randomUUID()}>
          <img className="avatar" src={avatar.src} alt={avatar.alt} />
        </button>
      ))}
    </>
  );
}
