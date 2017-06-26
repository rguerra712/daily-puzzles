'use strict';

(function(cryptoquote, $){

	cryptoquote.formatQuote = function(data) {
		let quote = data.quote;
		let author = data.author;
		return `<p>${quote}<p><p>  -${author}`; 
	}

})( window.cryptoquote = window.cryptoquote || {}, jQuery );