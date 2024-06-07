//your JS code here. If required.

function getFormvalue() {
	
	let form=document.getElementById('form1');
	let fname=form.elements["First Name"].value;
	let lname=form.elements["Last Name"].value;
	let ph=form.elements["Phone Number"].value;
	let email=form.elements["Email ID"].value;
	let ans="First Name: "+fname+" Last Name: "+lname+" Phone Number: "+ph+" Email ID: "+email;
	alert(ans);
}