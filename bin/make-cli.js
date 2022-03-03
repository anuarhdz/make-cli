#!/usr/bin/env node
const { cli, help } = require('@pawelgalazka/cli')
const init = require('../lib/index.js');
const clone = require('../lib/clone.js');
const final = require('../lib/final.js');


help(defaultCMD, 'Init help')

function defaultCMD() {
  init,
    clone,
    final
}

cli({
  init,
  clone,
  final,
  default: defaultCMD
});