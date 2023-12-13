import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store'
import './index.css';
import { fetchUsers } from './features/users/usersSlice';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchUsers())
// store.dispatch(fetchPosts())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

