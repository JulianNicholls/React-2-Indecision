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
      <React.Fragment>
        {error && <p className="add-option-error">{error}</p>}
        <form className="add-option" onSubmit={this.addOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddOption;
