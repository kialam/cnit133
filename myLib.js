/* myLib v1.0
Author: Kia Lam
Date created: 11.5.13
*/
function calcSquare(num){
		return num*num
	}
	function getNum(str){
		var num = prompt(str);
		while (isNaN(num)) {
			alert('Tsk, tsk, you did not enter a number');
			num = prompt(str)
		}
		return num
	}
function numPlay(str){
	var num = prompt(str);
	while (isNaN(num)) {
		alert('Error! You need to enter a number for this to work.');
		num = prompt(str)
	}
	square = num*num;
	document.write('You entered: ' + num + '<br />');
	document.write('The square of ' + num + " is " + square);
}
