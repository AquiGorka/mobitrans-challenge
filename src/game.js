"use strict";

const argv = require('minimist')(process.argv.slice(2)),
  expression = require('./expression.js');

const level = argv.level || 1,
  tree = argv.tree,
  readline = require('readline'),
  rl = readline.createInterface({ input: process.stdin, output: process.stdout }),
  exp = expression({ level: level });

console.log('Expression for level (' + level +'): ', exp.render());
if (argv.plain) {
  console.log('Plain:', exp.renderPlain());
}
if (argv.simple) {
  console.log('Simple:', exp.renderSimple());
}
if (argv.tree) {
  console.log('Tree:\n', exp.renderTree());
}
if (argv.tip) {
  console.log('Tip:', exp.renderTip());
}
if (argv.answer) {
  console.log('Answer:', exp.resolve());
}
if (argv.list) {
  console.log('List: ', exp.list);
}

rl.question('Your answer: ', (answer) => {
  answer = parseInt(answer);
  if (answer == exp.resolve()) {
    console.log('Congratulations you did alright!');
  } else {
    console.log('Sorry but no. Tip: ', exp.renderTip());
  }
  rl.close();
});
