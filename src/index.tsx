import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
//import { MemoryGame } from './memory-game/MemoryGame';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//console.log(store.getState())
//const memoryGame = new MemoryGame();

store.subscribe(() => {
  //memoryGame.gameStatus();
  console.log(store.getState())
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

