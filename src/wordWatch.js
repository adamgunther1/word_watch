const $ = require('jquery')
const API =  'https://wordwatch-api.herokuapp.com'

function WordWatch (word) {
  this.name = word.name
  this.count = word.count
}

WordWatch.prototype.toHTML = function () {
  return `${this.name} (${this.count})`
}

WordWatch.findAndCountTopWord = function () {
  return this.getTopWord ()
  .then( function (word) {
    let name = Object.keys(word.word)[0]
    let count = Object.values(word.word)[0]
    let wordObj = { name, count}
    return new WordWatch (wordObj)
  })
  .then(function (wordWatch) {
    return wordWatch.toHTML ()
  })
}

WordWatch.getTopWord = function () {
  return $.getJSON(`${API}/api/v1/top_word`)
}

module.exports = WordWatch