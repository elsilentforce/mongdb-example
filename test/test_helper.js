const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test', {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connection
  .once('open', () => { done(); } )
  .on('error', (error) => {
    console.warn('Warning', error);
  });
});


beforeEach(() => {
  mongoose.connection.collections.users.drop((done) => {
    // Ready to run next test !!
    done();
  });
});
