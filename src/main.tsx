import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import "./index.css";
import App from "./App";

/**
 * Means of navigation
 * Link: Navigate to new page. This wraps the element and makes it a link. <Link to="/myUrl"/>
 * Outlet: Use inside a parent route that has a child route. This is where the child route will render
 */

// Creates root page by element with id="root". By default, the root id is attached to the index.html div inside the body element like so:
{/* 
<body>
    <div id="root"></div>
</body>  
*/}
const container = document.getElementById('app'); // app.js is the base container for the webpage
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />); // Render base container
// The base container(app.js), contains the routes for the application. These are used to take the URL and "route" to a specified component