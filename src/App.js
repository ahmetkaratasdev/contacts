import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Contacts</h1>
      </header>
        <Practice />
      <header className="App-background">
        <h2>Help Me</h2>
      </header>
      <script>
        const fetchPromise = fetch(“https://ghibliapi.herokuapp.com/people");
        console.log(fetchPromise);
      </script>

    </div>

  );
}

export default App;
