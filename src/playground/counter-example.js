class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      count: props.start
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  addOne() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  subtractOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  reset() {
    this.setState(() => ({ count: this.props.start }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subtractOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter start={10} />, document.getElementById('root'));
