exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	var auxArray = [];
	for (var key in obj) {
        if(obj.hasOwnProperty(key)) {
			var currentProp = key.toString() + ': ' + obj[key];
			auxArray.push(currentProp);
		}
	}
	return auxArray;
  }
};
