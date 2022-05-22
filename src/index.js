import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



 ReactDOM.render(<App/>, document.getElementById('root')); //pass in the component that we need to render which is App
                                                          //We have to trigger document.getELementByid, which will trigger the div
                                                          //Then pass a string of root, which will trigger the div with an id of root and inject the entire
                                                          //react application inside of it.
