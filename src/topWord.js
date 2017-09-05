const $ = require('jquery')
const API =  'https://wordwatch-api.herokuapp.com'

function TopWord (word) {
  this.name = word.name
  this.count = word.count
}

TopWord.prototype.toHTML = function () {
  return `${this.name} (${this.count})`
}

TopWord.findAndCountTopWord = function () {
  return this.getTopWord ()
  .then( function (word) {
    let name = Object.keys(word.word)[0]
    let count = Object.values(word.word)[0]
    let wordObj = { name, count}
    return new TopWord (wordObj)
  })
  .then(function (topWord) {
    return topWord.toHTML ()
  })
}

TopWord.getTopWord = function () {
  return $.getJSON(`${API}/api/v1/top_word`)
}

module.exports = TopWord