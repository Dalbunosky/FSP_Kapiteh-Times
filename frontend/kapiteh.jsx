//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      users: { [window.currentUser.id]: window.currentUser },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  
  // let store = configureStore();
  const root = document.getElementById("origin");
  // ReactDOM.render(<h1>Welcome to Kapiteh Times React Base</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});