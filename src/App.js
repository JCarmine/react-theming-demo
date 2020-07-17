import React from 'react';
import logo from './logo.svg';
import { useTheme } from './ThemeContext';
import { withTheme } from 'styled-components';

import './styles/App.scss';

function App (props) {

  const themeToggle = useTheme();

  const theme = props.theme.mode === 'light' ? 'light' : 'dark';

  return (
    <div className={`namespacedContainer ${theme}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <p>
          <button 
            className="button"
            onClick={() => themeToggle.toggle()} 
          >
            {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </p>
      </header>
    </div>
  );
}

export default withTheme(App);
