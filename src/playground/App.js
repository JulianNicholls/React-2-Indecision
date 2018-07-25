const Header = ({ title = 'Indecision App', subtitle }) => (
  <header
    style={{
      background: '#335',
      color: '#fff',
      marginBottom: '10px',
      padding: '10px 0 5px 10rem'
    }}
  >
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </header>
);

const Action = ({ hasOptions, makeDecision }) => (
  <button disabled={!hasOptions} onClick={makeDecision}>
    What should I do?
  </button>
);

const Options = ({ options, removeAll, removeOption }) => {
  if (options.length === 0) return <p>You have no options</p>;

  return (
    <div>
      <button onClick={removeAll}>Remove All</button>
      {options.map(option => (
        <Option key={option} text={option} removeOption={removeOption} />
      ))}
    </div>
  );
};

const Option = ({ text, removeOption }) => (
  <div className="option">
    {text}
    <button onClick={() => removeOption(text)}>Remove</button>
  </div>
);

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
        {error && <p style={{ color: '#a00' }}>{error}</p>}
      </form>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.decide = this.decide.bind(this);

    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: props.options // ['Option 1', 'Second Option', 'Choice Three']
    };
  }

  componentDidMount() {
    const saved_options = localStorage.getItem('indecision_options');

    try {
      const options = JSON.parse(saved_options);

      if (options) this.setState(() => ({ options }));
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length)
      localStorage.setItem('indecision_options', JSON.stringify(this.state.options));
  }

  addOption(text) {
    if (!text) return 'You must enter some text';
    else if (this.state.options.indexOf(text) !== -1) return 'That is a duplicate';

    this.setState(prevState => ({ options: [...prevState.options, text] }));
  }

  removeOption(text) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== text)
    }));
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
        <Options
          options={options}
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

// The other way of setting defaults
IndecisionApp.defaultProps = {
  options: []
};

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
