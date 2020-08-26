#!/usr/bin/env node
"use strict";

var PackJson = require("../package.json");

var program = require('commander');

var initMethod = require('../lib/init');

program.version(PackJson.version);
program.command('init <name>').action(function (name) {
  initMethod(name);
});
program.parse(process.argv);