const $ = require('jquery')
const WordWatch = require('./wordWatch')

$(document).ready(function () {
  WordWatch.findAndCountTopWord ()
  .then(function (wordHTML) {
    $('.top-word h3').append (wordHTML)
  })
})

