import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import Home from './views/Home';
import { Header } from './components/Header';
import { MovieDetail } from './views/MovieDetails';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Favoritos } from './views/Favoritos';

const router = createBrowserRouter([
  {
    element: <Header/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/favoritos", element: <Favoritos /> },
      { path: "/movie/:id", element: <MovieDetail/> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
