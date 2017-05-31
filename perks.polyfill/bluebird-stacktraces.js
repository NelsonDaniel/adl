// to enable bluebird stack traces, set global.ENABLE_BLUEBIRD to true
if (global.ENABLE_BLUEBIRD) {
  const Promise = require("bluebird")
  Promise.config({
    longStackTraces: true,
    warnings: {
      wForgottenReturn: false
    }
  })

  global.Promise = Promise;
}