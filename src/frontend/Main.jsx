import React, { Component } from 'react';
import '../style/App.css';

export default class Main extends Component {
  render() {
    return (
      <div className='main w-full h-screen flex'>
        <div className = "loby w-full h-96 bg-red-300 m-auto">
          <div className='mx-auto w-2/3 bg-yellow-50'>
            <h2 className='mx-auto'>Waiting Start Game</h2>
          </div>
        </div>
      </div>
    );
  };
}
