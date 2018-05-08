import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import loadJsonFile from 'load-json-file';

import webpack from 'webpack';
import config from '../../webpack/client/dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import App from '../client/App';
import configStore from '../client/store';

const app = express();

if(process.env.NODE_ENV === "development") {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true, 
        publicPath: config.output.publicPath,
        stats: "errors-only"
    }));
    app.use(webpackHotMiddleware(compiler));
}

// loadJsonFile('./build/manifest.json')
// .then(json => {console.log(json)})
// .catch(err => { console.log(err)});
 

const renderFullPage = (html, helmet, initialState) => {



    return `
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.base.toString()}
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')};
          </script>
          <script src=${process.env.NODE_ENV === 'development' ? "/app.bundle.js" : "/app.bundle.js"} type="text/javascript"></script>
          <script src=${process.env.NODE_ENV === 'development' ? "/vendor.bundle.js" : "/vendor.bundle.js"} type="text/javascript"></script>
        </body>
      </html>
    `;
  }



app.use(express.static(path.resolve(__dirname, '../../build/public')));

app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





app.get("/", (req, res) => {
    const { url } = req;
    const context = {};
    const store = configStore({});
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <App/>
        </StaticRouter>
      </Provider>
    );
  
    const finalState = store.getState();
    const helmet = Helmet.renderStatic();
  
    res.status(200).send(renderFullPage(content, helmet, finalState));
});

app.listen(process.env.SERVER_PORT, err => {
    if(!err) {
        console.log(`website running on port ${process.env.SERVER_PORT}`);
    }
});