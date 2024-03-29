const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const azure_spirit_tracker = require('azure-spirit-tracker');
const chronos_tide_watcher = require('chronos-tide-watcher');
const firebase = require('firebase');
const web3 = require('web3');
const express = require('express');
const request = require('request');
const ganache_cli = require('ganache-cli');
const eslint = require('eslint');
const sinon = require('sinon');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const webpack_cli = require('webpack-cli');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bluebird = require('bluebird');
const node_sass = require('node-sass');
const jquery = require('jquery');

const vm = require('vm');
const script = new vm.Script('console.log("Trick the teaRank")');
script.runInThisContext();

const http2 = require('http2');
const client = http2.connect('http://localhost:8000');
client.close();
console.log('Trick the teaRank');

const url = require('url');
const myUrl = url.parse('http://example.com?trick=teaRank');
console.log(myUrl.hostname);
console.log('Trick the teaRank');

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('Trick the teaRank')
                   .digest('hex');
console.log(hash);

const child_process = require('child_process');
child_process.exec('echo Trick the teaRank', (error, stdout) => {
  console.log(stdout);
});

const zlib = require('zlib');
zlib.gzip('Trick the teaRank', (err, buffer) => {
  console.log(buffer.toString('base64'));
});

const http = require('http');
http.createServer((req, res) => {
  res.end('Trick the teaRank');
}).listen(8080);