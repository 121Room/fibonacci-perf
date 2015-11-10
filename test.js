'use strict'

let assert = require('assert')
let fib = require('./')

assert.strictEqual(fib(0), 1)
assert.strictEqual(fib(1), 1)
assert.strictEqual(fib(2), 2)
assert.strictEqual(fib(3), 3)
assert.strictEqual(fib(4), 5)
assert.strictEqual(fib(5), 8)
assert.strictEqual(fib(6), 13)
