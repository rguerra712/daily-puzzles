const crossword = require('../js/crossword.js');
const chai = require('chai');
const $ = require('jquery');
const expect = chai.expect;

(function() {

    'use strict';

    describe('getKey()', function() {

        it('should give proper puzzle for 07/08/2017', function() {
            let expectedUrl = 'http://www.mirroreyes.com/crossword/2017/c170708.html';
            let dateToTest = new Date('Jul 8, 2017');
            let actualUrl = crossword.getCrosswordUrl(dateToTest);
            expect(actualUrl).to.equal(expectedUrl);
        });
    });
})();