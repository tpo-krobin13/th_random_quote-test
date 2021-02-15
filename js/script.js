'use strict'

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
 * A list of the quotes to be displayed on this page.
 * @type {Array}
 */
const quotes = [
  {
    quote: 'quote #1',
    source: 'source a',
    year: 'year',
    citation: 'citation'
  },
  {
    quote: 'quote #2',
    source: 'source b'
  },
  {
    quote: 'quote #3',
    source: 'source c'
  },
  {
    quote: 'quote #4',
    source: 'source d'
  },
  {
    quote: 'quote #5',
    source: 'source e',
    tags: [
      'greatest',
      'quote',
      'ever'
    ]
  }
]

/**
 * Returns a random item from the `quotes` array.
 *
 * @return {Object}
 */
function getRandomQuote () {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

/**
 * Returns a random CSS color (using RGB notation).
 *
 * @return {String}
 */
function getRandomBackgroundColorValue () {
  /**
   * For each of the following compoenents, a value between 0 and 127 is
   * calculated, so that the combination will be on the darker end of the
   * spectrum. This is done to maintain visual contrast with the white text
   * on the page.
   */
  const red = Math.floor(Math.random() * 128)
  const blue = Math.floor(Math.random() * 128)
  const green = Math.floor(Math.random() * 128)

  return `rgb(${red},${green},${blue})`
}

/**
 * Displays the selected quote in the web page.
 *
 * @return {undefined}
 */
function printQuote () {
  /**
   * The quote that will be displayed in the web page.
   * @type {Object}
   */
  const selectedQuote = getRandomQuote()

  /**
   * If the selected quote has additional text to display, it will be placed
   * into this variable for inclusion in the HTML fragment inserted to
   * #quote-box.
   * @type {String}
   */
  let addlText = ''

  if (selectedQuote.citation) {
    addlText += `<span class="citation">${selectedQuote.citation}</span>`
  }

  if (selectedQuote.year) {
    addlText += `<span class="year">${selectedQuote.year}</span>`
  }

  if (selectedQuote.tags) {
    addlText += `</p><p class="tags">#${selectedQuote.tags.join(', #')}`
  }

  /**
   * Insert the HTML fragment. This will replace whatever is there already.
   */
  document.getElementById('quote-box').innerHTML = `<p class="quote">${selectedQuote.quote}</p><p class="source">${selectedQuote.source}${addlText}</p>`

  /**
   * Change the background color.
   */
  document.body.style.backgroundColor = getRandomBackgroundColorValue()
}

/**
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 */
document.getElementById('load-quote').addEventListener('click', printQuote, false)
