import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Creates root page by element with id="root". By default, the root id is attached to the index.html div inside the body element like so:
{/* 
<body>
    <div id="root"></div>
</body>  
*/}
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);


