import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BackdropProvider } from 'backdrop-easy';
import { CircularProgress } from '@material-ui/core';

ReactDOM.render(
    <BackdropProvider progress={<CircularProgress/>}>
        <App />
    </BackdropProvider>
, document.getElementById('root'))
