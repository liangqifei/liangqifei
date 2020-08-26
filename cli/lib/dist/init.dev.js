"use strict";

var _require = require('util'),
    promisify = _require.promisify;

var figlet = promisify(require('figlet'));

var clear = require('clear');

var chalk = require('chalk');

var log = function log(content) {
  return console.log(chalk.green(content));
};

var _require2 = require('./download'),
    clone = _require2.clone;

var _require3 = require('path'),
    resolve = _require3.resolve;

var spawn = function spawn() {
  var _len,
      args,
      _key,
      _require4,
      spawn,
      _args = arguments;

  return regeneratorRuntime.async(function spawn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = _args[_key];
          }

          _require4 = require('child_process'), spawn = _require4.spawn;
          return _context.abrupt("return", new Promise(function (resolve) {
            var proc = spawn.apply(void 0, args);
            proc.stdout.pipe(process.stdout);
            proc.stderr.pipe(process.stderr);
            proc.on('close', function () {
              resolve();
            });
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = function _callee(name) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //打印欢迎界面
          clear();
          _context2.next = 3;
          return regeneratorRuntime.awrap(figlet('reactApp'));

        case 3:
          data = _context2.sent;
          log(data);
          log("\uD83D\uDE39\u521B\u5EFA\u9879\u76EE\uFF1A".concat(name));
          _context2.next = 8;
          return regeneratorRuntime.awrap(clone('github:liangqifei/REACTTS/tree/master/create_react', name));

        case 8:
          //安装依赖
          log('安装依赖');
          _context2.next = 11;
          return regeneratorRuntime.awrap(spawn('cnpm', ['install'], {
            cwd: "./".concat(name)
          }));

        case 11:
          log(chalk.green("\n        =======================\n        \uD83D\uDC4C\u5B89\u88C5\u5B8C\u6210\n            cd ".concat(name, "\n            npm run serv\n        =======================\n    ")));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
};