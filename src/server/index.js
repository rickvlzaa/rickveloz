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

const app = express();

if(process.env.NODE_ENV === "DEVELOPMENT") {
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





app.use(express.static(path.resolve(__dirname, '../../build/public')));

app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req, res) => {
    res.send(`<html>
    <head>
      <title>Hello World</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="app.bundle.js"></script>
    </body>
    </html>`)
});

app.listen(process.env.SERVER_PORT, err => {
    if(!err) {
        console.log(`website running on port ${process.env.SERVER_PORT}`);
    }
});