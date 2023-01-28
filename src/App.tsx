export default function App() {
  let count = 5;

  while (count > 5) {
    console.log('Countdown: 5', count);
    count -= 1;
  }

  const customStyles = {
    color: 'blue',
    width: 200,
  };

  function shoutSentence(sentence: string) {
    return sentence.toUpperCase();
  }

  console.log(shoutSentence('Hello World'));

  return (
    <>
      <h1 style={customStyles}>Hello World</h1>
    </>
  );
}
