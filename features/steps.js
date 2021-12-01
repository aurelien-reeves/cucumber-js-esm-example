import assert from 'assert/strict'
import { When, Then } from '@cucumber/cucumber'

import SayHello from '../function.js'

let sayWho = ''
let sayWhat = ''

When('I Say Hello', function () {
  // Write code here that turns the phrase above into concrete actions
  sayWhat = SayHello()
});

When('I Say Hello {string}', function (string) {
  sayWho = string
  sayWhat = SayHello(string)
});

Then('it says hello to the world', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(sayWhat, 'Hello, world!')
});

Then('it says {string}', function (string) {
  assert.equal(sayWhat, `Hello, ${sayWho}!`)
});
