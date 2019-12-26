import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    return `
        <html>
        <head>
        <link rel="stylesheet" href="css/app.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="js/bundle.js"></script>
        </body>
        </html>
    `;
}