import React from 'react';
import logo from './react.svg';
import './Home.css';
import store from './store';
import { Provider } from 'react-redux'
import TodoList from './features/todos/components/TodoList';
import TodoListOperations from './features/todos/components/TodoOperations';
class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to Razzle</h2>
          </div>
          <TodoListOperations />
          <TodoList />
          <p className="Home-intro">
            To get started, edit <code>src/App.js</code> or{' '}
            <code>src/Home.js</code> and save to reload.
        </p>
          <ul className="Home-resources">
            <li>
              <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
              <a href="https://palmer.chat">Community Slack</a>
            </li>
            <li>
              <a href="https://www.google.com">added later</a>
            </li>
          </ul>
        </div>
      </Provider>

    );
  }
}

export default Home;