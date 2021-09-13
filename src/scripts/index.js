import 'bootstrap';
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const _ = require('underscore');
const moment = require('moment');
const numeral = require('numeral');
const $ = require('jquery');
const hive = require('@hiveio/hive-js');
const contentExampleCompiled = require('~/content-example.tmpl');
const resultP = hive.api.getContentAsync('yamadapc', 'test-1-2-3-4-5-6-7-9');

resultP.then(result => {
    console.log(result);
    $('#content-example').html(contentExampleCompiled({ _, numeral, moment, result }));
});
