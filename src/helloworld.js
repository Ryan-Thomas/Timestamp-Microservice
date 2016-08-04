// @flow

const port = process.argv[2];

const express = require('express');
const app = express();
app.get('/', (req: any, res: any) => {
  res.end('Hello World!');
});
app.listen(port);
