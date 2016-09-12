exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	var bitLocation = 1<<(bit-1);
	if((num & bitLocation) > 0){
		return 1;
	}else{
		return 0;
	}
  },

  base10: function(str) {
	var number = 0;
	var j = 0;
	for(var i=str.length-1;i>=0;i--){
		if(str[i]==='1'){
			number+= Math.pow(2,j);
		}
		j++;
	}
	return number;
  },

  convertToBinary: function(num) {
	var binaryConverted = num.toString(2); //base 2 or binary conversion of the number
	var binaryLength = binaryConverted.length;
	
	var zeroPad = 8 - binaryLength;
	while(zeroPad>0){
		binaryConverted = '0' + binaryConverted;
		zeroPad--;
	}
	
	return binaryConverted;
  },

  multiply: function(a, b) {
	var result = a * b;
    var precisionA = a.toString().split('.');
    var precisionB = b.toString().split('.');
    var precision;
    
	if(precisionA.length === 1 || precisionB.length === 1)
    {
        if(precisionA.length > 1){
            precision = precisionA[1].length;
        }
        else if(precisionB.length > 1) {
            precision = precisionB[1].length;
        }
        else {
            precision = 0;
        }
    }
    else
    {
        precision = precisionA[1].length + precisionB[1].length;
    }
    result = result.toPrecision(precision);
    return parseFloat(result);
  }
};
