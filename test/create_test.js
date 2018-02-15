const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const john = new User({ name: 'John' });
    john.save()
      .then(() => {
        // Has John been saved successfully?
        assert(!john.isNew);
      });
      done();
  });
});
