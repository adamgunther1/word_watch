const $ = require('jquery')
const TopWord = require('./topWord')

$(document).ready(function () {
  TopWord.findAndCountTopWord ()
  .then(function (wordHTML) {
    $('.top-word h3').append (wordHTML)
  })

  
})

