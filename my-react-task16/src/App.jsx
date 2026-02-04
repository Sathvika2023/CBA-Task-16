
const Message = () => {
  return <h2>Welcome to React</h2>;
};


function Info(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  const name = "Sathvika";
  const age = 20;
  const isLoggedIn = true;

  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      {/* Exercise 1 */}
      <h1>Hello, {name}</h1>
      <p>You are {age} years old</p>

      {/* Exercise 2 */}
      {age >= 18 ? <p>You are eligible</p> : <p>Not eligible</p>}

      <hr />

      {/* Exercise 3 */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr />

      {/* Exercise 4 */}
      <Message />

      <hr />

      {/* Exercise 5 */}
      <Info
        title="React Basics"
        description="Learning components and props"
      />

      <hr />

      {/* Exercise 6 */}
      {isLoggedIn ? <h3>Welcome User</h3> : <h3>Please Login</h3>}
    </div>
  );
}

export default App;
