var bookEnds = function(message) {
	var firstLetter = message.charAt(0);
  var lastLetter = message.charAt(message.length - 1);
  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
};

bookEnds("bloorp");
