exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
		return arr.indexOf(item);
  },

  sum: function(arr) {
		var sumTotal = 0;
        var count = 0;
        while(count < arr.length) {
            sumTotal += arr[count++];
        }
        return sumTotal;
  },

  remove: function(arr, item) {
		var auxArray = [];
        var iterator = 0;
        while (iterator < arr.length) {
            if(arr[iterator] !== item) {
                auxArray.push(arr[iterator]);
            }
            iterator++;
        }
        return auxArray;
  },

  removeWithoutCopy: function(arr, item) {
		var iterator = 0;
        while(iterator < arr.length) {
            if(arr[iterator] === item) {
                arr.splice(iterator--,1);
            }
            iterator++;
        }

        return arr;
  },

  append: function(arr, item) {
		arr.push(item);
		return arr;
  },

  truncate: function(arr) {
		arr.pop();
		return arr;
  },

  prepend: function(arr, item) {
		arr.splice(0,0,item);
		return arr;
  },

  curtail: function(arr) {
		arr.shift();
		return arr;
  },

  concat: function(arr1, arr2) {
		return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
  },

  count: function(arr, item) {
		var iterator = 0;
        var count = 0;
        while(iterator < arr.length) {
            if(arr[iterator] === item) {
                count++;
            }
            iterator++;
        }

        return count;
  },

  duplicates: function(arr) {
		arr.sort();
		var auxArray = [];
		
		for(var i=0;i<arr.length;i++){
			if(arr[i]===arr[i+1]){
				if(auxArray[auxArray.length - 1]!== arr[i]){
					auxArray.push(arr[i]);
				}
			}
		}
		return auxArray;
  },

  square: function(arr) {
		for(var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
  },

  findAllOccurrences: function(arr, target) {
		var occurrenceArray = [];
		for(var i=0;i<arr.length;i++){
			if(arr[i]=== target){
				occurrenceArray.push(i);
			}
		}
		return occurrenceArray;
  }
};
