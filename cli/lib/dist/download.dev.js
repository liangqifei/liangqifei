"use strict";

var _require = require('util'),
    promisify = _require.promisify;

module.exports.clone = function _callee(repo, dest) {
  var download, ora, process;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          download = promisify(require('download-git-repo'));
          ora = require('ora');
          process = ora({
            color: 'yellow',
            text: "......\u4E0B\u8F7D ".concat(repo)
          });
          process.start();
          _context.next = 6;
          return regeneratorRuntime.awrap(download(repo, dest));

        case 6:
          process.succeed();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};