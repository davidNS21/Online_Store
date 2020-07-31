import React from 'react';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

import MainRouter from './components/MainRouter';

function App() {
  return (
    <Provider store= {store}>
        <div className="App">

            <MainRouter />

        </div>
    </Provider>
    
  );
}

export default App;
