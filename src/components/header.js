import React from 'react';

import TopNav from './top-nav';

import './header.css';

import {restartGame} from '../actions'; //do we need this here? 

export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        // onRestartGame={() => props.onRestartGame()}
        onRestartGame={(e) => props.dispatch(restartGame(e.target.value))}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
