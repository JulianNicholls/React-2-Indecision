const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const addOption = event => {
  event.preventDefault();

  const newOption = event.target.elements.option.value;

  if (newOption) {
    app.options.push(newOption);
    event.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  const decision = app.options[index];

  alert(decision);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>
        {app.options.length > 0 ? 'Here are your options' : 'You have no options'}
      </p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button disabled={app.options.length === 0} onClick={removeAll}>
        Remove All
      </button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>

      <form onSubmit={addOption}>
        <input type="text" name="option" />
        <button>Add it</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
