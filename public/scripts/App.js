'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var addOption = function addOption(event) {
  event.preventDefault();

  console.log('submit');

  var newOption = event.target.elements.option.value;
  console.log({ newOption: newOption });

  if (newOption) {
    app.options.push(newOption);
    event.target.elements.option.value = '';
    render();
  }
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'h2',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'You have no options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: addOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add it'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
