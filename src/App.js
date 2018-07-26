import React from 'react';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selected: undefined
  };

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

  addOption = text => {
    if (!text) return 'You must enter some text';
    else if (this.state.options.indexOf(text) !== -1) return 'That is a duplicate';

    this.setState(prevState => ({ options: [...prevState.options, text] }));
  };

  removeOption = text => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== text)
    }));
  };

  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };

  decide = () => {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);
    const decision = options[index];

    this.setState(() => ({ selected: decision }));
  };

  closeModal = () => {
    this.setState(() => ({ selected: undefined }));
  };

  render() {
    const { options } = this.state;

    return (
      <div>
        <Header
          title="Indecision App"
          subtitle="Put your life in the hands of a computer"
        />
        <Action hasOptions={options.length > 0} makeDecision={this.decide} />
        <Options
          options={options}
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />

        <OptionModal selected={this.state.selected} closeModal={this.closeModal} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
