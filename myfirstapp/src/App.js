function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Julio here!</h1>
      <h2>
        Today is {currDate.toLocaleDateString()} and the time:{" "}
        {currDate.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default App;
