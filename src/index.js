import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';
import GlobalStatusBar from './appBar/appBar.js'

ReactDOM.render(<GlobalStatusBar contestName="Kỳ thi 1"
                contestTimeLeft="00:00:01"
                contestDuration="23:59:59"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
