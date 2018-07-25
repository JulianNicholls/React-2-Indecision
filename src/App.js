class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <header
        style={{
          background: '#333',
          color: '#fff',
          marginBottom: '10px',
          padding: '10px 0 5px 10rem'
        }}
      >
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </header>
    );
  }
}

class Action extends React.Component {
  render() {
    const { hasOptions, makeDecision } = this.props;

    return (
      <button disabled={!hasOptions} onClick={makeDecision}>
        What should I do?
      </button>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options, removeAll } = this.props;

    if (options.length === 0) return null;

    return (
      <div>
        <button onClick={removeAll}>Remove All</button>
        <ol>{options.map(option => <Option key={option} text={option} />)}</ol>
      </div>
    );
  }
}

const Option = ({ text }) => <li>{text}</li>;

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);

    this.state = {
      error: ''
    };
  }

  addOption(event) {
    event.preventDefault();

    const value = event.target.elements.option.value.trim();
    const error = this.props.addOption(value);

    this.setState(() => ({ error }));

    if (!error) event.target.elements.option.value = '';
  }

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.addOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.decide = this.decide.bind(this);

    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: [] // ['Option 1', 'Second Option', 'Choice Three']
    };
  }

  addOption(text) {
    if (!text) return 'You must enter some text';
    else if (this.state.options.indexOf(text) !== -1) return 'That is a duplicate';

    this.setState(prevState => ({ options: [...prevState.options, text] }));
  }

  removeAll() {
    this.setState(() => ({ options: [] }));
  }

  decide() {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);
    const decision = options[index];

    alert(decision);
  }

  render() {
    const { title, subtitle, options } = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={options.length > 0} makeDecision={this.decide} />
        <Options options={options} removeAll={this.removeAll} />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
