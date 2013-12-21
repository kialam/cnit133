function checkform(frm) {
	if (form1.nm.value == "" || form1.nm.value == null)
	{
		alert('please enter name!');
		form1.nm.focus();
		return false;
	}

	if (isemail(form1.email) == false)
	{
		alert("Please enter email in this format \n abc@abc.com");
		form1.email.focus();
		return false;
	}
	
	return true;
}
function isemail(ele) {
	if (ele.value.indexOf("@") + "" == "-1" || ele.value.indexOf(".") + "" == "-1" || ele.value == "" || ele.value == null)
	{
		return false;
	}
	else {
		return true;
	}
}