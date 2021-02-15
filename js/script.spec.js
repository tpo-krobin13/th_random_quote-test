/* eslint-env mocha */
/* global quotes, getRandomQuote, printQuote */

'use strict'

const expect = window.chai.expect

describe('meets expectations', () => {
  describe('the "quotes" variable', () => {
    it('must exist', () => {
      expect(quotes).to.not.equal(undefined)
    })
  });
});
