const myInformation = {
  name: 'Nathan',
  campus: 'Lyon',
};

const myInfos = () => {};

var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `Hi my name is ${myInformation.name}, I'm a wilder in ${myInformation.campus}`,
    e: 'oO',
    T: 'U ',
  })
);

module.exports = myInfos;
