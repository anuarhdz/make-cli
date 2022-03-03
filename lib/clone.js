const { shell } = require('@pawelgalazka/shell')
const command = 'git clone https://github.com/anuarhdz/makefile.git ./';

module.exports = {
  clone: clone()
}

function clone() {
  shell(command);
}
