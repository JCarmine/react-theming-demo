import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from './ThemeContext';
import { withTheme } from 'styled-components';

import './App.scss';

function App (props) {

  const themeToggle = useTheme();

  return (
    <div className={props.theme.mode === 'light' ? `container dark` : `container light`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <p>
          <button 
            onClick={() => themeToggle.toggle()} 
            className={props.theme.mode === 'light' ? `button dark` : `button light`}
          >
            {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </p>
      </header>
    </div>
  );
}

export default withTheme(App);
