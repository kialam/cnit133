var promptName = prompt('what is your name?');
if (promptName === '') {
	alert('you did not enter a name');
} else {
	alert('hello ' + promptName + '!');
}


var promptName = prompt('what is your name?');

do {
		alert('you did not enter a name');
		var promptName = prompt('what is your name?');

}

while (promptName == '' || parseInt(promptName));