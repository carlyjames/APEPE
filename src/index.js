import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
     
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

