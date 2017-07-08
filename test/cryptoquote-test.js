const cryptoquote = require('../js/cryptoquote.js');
const chai = require('chai');
const $ = require('jquery');
const expect = chai.expect;

(function() {
    
    'use strict';

    describe('getKey()', function(){

        it('should not contain an undefined value', function(){
            let key = cryptoquote.getKey();
            for (let i = 0; i < 26; i++) { // Check 26 times just to be certain
                expect(key[i]).to.not.equal(undefined);
            }
        });
        
        it('should be an array of characters that never = their index', function(){
            for (var tries = 0; tries < 10; tries++) {
                let key = cryptoquote.getKey();
                for (let i = 0; i < 26; i++) { // Check 26 times just to be certain
                    expect(key[i]).to.not.equal(i);
                }
            }
        });

        it('should contain all values from 0 to 25', function(){
            let key = cryptoquote.getKey();
            for (let i = 0; i < 26; i++) { // Check 26 times just to be certain
                expect(key.includes(i)).to.equal(true);
            }
        });
    });

    describe('encrypt()', function(){

        it('should transpose letters as a caesar cipher if off by 1', function(){
            let key = [];
		    for (let i = 0; i < 25; ++i) key[i] = i + 1;
            key[25] = 0;
            // key = caesar cipher off by 1
            let textToEncrypt = 'Hello World!';
            let expectedEncypryption = 'Ifmmp Xpsme!';
            let encrypted = cryptoquote.encrypt(textToEncrypt, key);
            expect(encrypted).to.equal(expectedEncypryption);
        });
        
    });

})();