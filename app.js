/**
 * Created by przem_000 on 05-Nov-15.
 */

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);