'use strict'

const fs = require('fs')
const { once } = require('events')

async function run (opts) {
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  return stream
}

module.exports = run
