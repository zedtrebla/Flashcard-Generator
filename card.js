
var fs = require("fs");

var BasicCard = 0;

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
};

exports.ClozeCard = function(text, cloze) {

	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

exports.questions = {
		full: 'George Washington was the first president of the United States..',
		cloze: 'George Washington'
    };

    
firstPresident = new flashCards.ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.full);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');
    
