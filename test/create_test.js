const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', () => {
    const john = new User({ name: 'John' });
    john.save();
  });
});
