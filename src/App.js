class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          background: '#333',
          color: '#fff',
          marginBottom: '10px',
          padding: '10px 0 5px 10rem'
        }}
      >
        <h1>Indecision</h1>
        <h3>Put your life in the hands of a computer</h3>
      </header>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button>What should I do?</button>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        <li>Static Option One</li>
        <li>Static Option Two</li>
      </ol>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
      </form>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
