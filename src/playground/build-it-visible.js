let visible = false;

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Togglability</h1>
      <button
        onClick={() => {
          visible = !visible;
          render();
        }}
      >
        {visible ? 'Hide' : 'Show'} details
      </button>
      {visible && <p>These are the details that you seek</p>}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('root'));
};

render();
