const $ = require('jquery')
const API =  'https://wordwatch-api.herokuapp.com'

class WordCloud {
  
  constructor (word) {
    this.name = word.name
    this.count = word.count
  }

  toHTML () {
    return `<p style="font-size: ${this.count}em;">${this.name}</p>`
  }

  static appendWords () {
    let paragraph = this.previousElementSibling.value
    let wordCollection = paragraph.split(' ')
    let downcasedWords = WordCloud.downcase(wordCollection)
    WordCloud.postWords (downcasedWords)
    let wordsObj = WordCloud.countWords(downcasedWords)
    let wordCloudObjects = Object.keys(wordsObj).map(function(key) {
      let word = {name: key, count: wordsObj[key]}
      return new WordCloud (word)
    })
    $( ".word-count p" ).remove()
    return wordCloudObjects.forEach(function (wordCloudObject) {
      $('.word-count').append(wordCloudObject.toHTML ())
    })
  }

  static postWords (words) {
    words.forEach(function (word) {
      $.ajax ({
        type: 'POST',
        url: `${API}/api/v1/words`,
        data: { word: { value: word }}
      })
      .then(function () {
        console.log(`${word} posted successfully`)
      })
    })
  }

  static downcase (words) {
    return words.map(function (word) {
      return word.toLowerCase()
    })
  }

  static countWords (words) {
    let wordsObj = {}
    words.forEach(function (word) {
      if (wordsObj[word]) {
        wordsObj[word] += 1
      } else {
        wordsObj[word] = 1
      }
    })
    return wordsObj
  }
}


module.exports = WordCloud