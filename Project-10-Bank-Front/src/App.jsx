import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

import Navigation from './Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
