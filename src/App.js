const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const addOption = event => {
  event.preventDefault();

  console.log('submit');

  const newOption = event.target.elements.option.value;
  console.log({ newOption });

  if (newOption) {
    app.options.push(newOption);
    event.target.elements.option.value = '';
    render();
  }
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>
        {app.options.length > 0 ? 'Here are your options' : 'You have no options'}
      </p>
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
