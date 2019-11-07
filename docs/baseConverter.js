var characterList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '+', '/'];

function baseToDec(number, base) {      
    var number = number + '';
    var result = 0;
    var base = parseInt(base);

    for (var i = 0; i < number.length; i++) {   
        result += (characterList.indexOf(number[number.length-1-i]))*Math.pow(base, i);        
    }
    
    return result;      
} 

function decToBase(number, base) {
	var base = parseInt(base);
	var number = parseInt(number);
	var result = '';

	while (Math.floor(number/base) != 0) {
		result = characterList[(number%base)] + result;	
		number = Math.floor(number/base);
	}
	
	result = characterList[(number%base)] + result;	
	
	return result;
}


function convert() {
	var number = document.getElementById('number').value;
	var fromBase = parseInt(document.getElementById('fromBase').value);
	var toBase = parseInt(document.getElementById('toBase').value);

	for (var i = 0; i<number.length; i++) {
		if(characterList.indexOf(number[i]) >= parseInt(fromBase) || !characterList.includes(number[i])) {
			document.getElementById('converted').innerHTML = "This is not a valid number for this base";
			return;
		}
	}
	if (fromBase<2 || fromBase > 64 || toBase < 2 || toBase > 64) {
		document.getElementById('converted').innerHTML = "Bases can only be numbers between 2 and 64";
	}
	else {
		document.getElementById('converted').innerHTML = number + " in base " + fromBase + " gives " + decToBase(baseToDec(number, fromBase), toBase) + " in base " + toBase;
	}
}
