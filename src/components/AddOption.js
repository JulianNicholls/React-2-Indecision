import React from 'react';

class AddOption extends React.Component {
  state = {
    error: ''
  };

  addOption = event => {
    event.preventDefault();

    const value = event.target.elements.option.value.trim();
    const error = this.props.addOption(value);

    this.setState(() => ({ error }));

    if (!error) event.target.elements.option.value = '';
  };

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

export default AddOption;
