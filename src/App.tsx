function App() {
  function exclaim(string: string) {
    return string + '!';
  }

  const exclaimArrow = (string: string) => string + '!';

  const user = {
    name: 'François Bouchard',
    city: 'Saint-Louis-du-Ha! Ha!',
    province: 'Québec',
    country: 'Canada',
    postalCode: 'A1B 2C3',
  };

  const { name, country } = user;
  const fruits = ['apple', 'banana', 'cantaloupe'];
  const [firstFruit, secondFruit] = fruits;
  
  console.log(firstFruit);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
