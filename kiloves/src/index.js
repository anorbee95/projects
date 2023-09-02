import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from "./App";
import Main from './components/Main'
import Trivia from './components/minigames/Trivia';
import Karaoke from './components/minigames/Karaoke';
import GuessWho from './components/minigames/GuessWho';
import Activity from './components/minigames/Activity';
import Order from './components/order/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "karaoke",
        element: <Karaoke />,
      },
      {
        path: "200iq",
        element: <Trivia />,
      },
      {
        path: "talald-ki",
        element: <GuessWho />
      },
      {
        path: "szinesz",
        element: <Activity />
      },
      {
        path: "vedd-meg",
        element: <Order />
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);