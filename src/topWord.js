const $ = require('jquery')
const API =  'https://wordwatch-api.herokuapp.com'

class TopWord {
  
  constructor (word) {
    this.name = word.name
    this.count = word.count
  }

  toHTML () {
    return `${this.name} (${this.count})`
  }

  static findAndCountTopWord () {
    return this.getTopWord ()
    .then( function (word) {
      let wordObj = {name: Object.keys(word.word)[0], count: Object.values(word.word)[0]}
      return new TopWord (wordObj)
    })
    .then(function (topWord) {
      return topWord.toHTML ()
    })
  }

  static getTopWord () {
    return $.getJSON(`${API}/api/v1/top_word`)
  }
}

module.exports = TopWord