const $ = require('jquery')
const TopWord = require('./topWord')
const WordCloud = require('./wordCloud')

$(document).ready(function () {
  TopWord.findAndCountTopWord ()
  .then(function (wordHTML) {
    $('.top-word h3').append (wordHTML)
  })

  $('button').on('click', WordCloud.appendWords)

  $('textarea').keypress(function(e) {
    if(e.which == 13) {
        $(this).blur()
        $('button').focus().click()
    }
  })
})

