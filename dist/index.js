
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./designsystem-marianasilva.cjs.production.min.js')
} else {
  module.exports = require('./designsystem-marianasilva.cjs.development.js')
}
