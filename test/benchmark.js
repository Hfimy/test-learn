const { num1, num2 } = require('../src/fn')

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('parseInt', () => {
    num1('123456');
}).add('Number', () => {
    num2('123456');
}).on('cycle', event => {
    console.log(String(event.target))
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
}).run({ 'async': true })

