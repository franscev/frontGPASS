

var globalNumber = 20;

	function test(globalNumber){
		var number = 10;
		console.log(number);
		console.log(globalNumber);
	}
	
	function testGlobalNumber(){

		console.log(number)

	}

	test(globalNumber);
