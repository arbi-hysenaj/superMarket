import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";


const root = document.querySelector("#react-root");
createRoot(root).render(<React.StrictMode><App /></React.StrictMode>)