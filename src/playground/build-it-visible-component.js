class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      visible: false
    };
  }

  toggle() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <h1>Visibility Togglability</h1>
        <button onClick={this.toggle}>{visible ? 'Hide' : 'Show'} details</button>
        {visible && <p>These are the details that you seek</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('root'));
