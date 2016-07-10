import sinonChai from 'sinon-chai';
chai.use(sinonChai);

var testsContext = require.context(".", true, /.test.js$/);
testsContext.keys().forEach(testsContext);