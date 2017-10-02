// alert("name");

console.log('test');
var prevName = [], prevId = [];
document.getElementById('convert').addEventListener("click", function(event) {
	var name = document.getElementById('t1').value;
	var id = document.getElementById('t2').value;

	if (name == "" || id == "") {
		alert("One of the fields is blank.. Fix it");
		return false;
	}

	if (prevName.indexOf(name) !== -1 || prevId.indexOf(id) !== -1) {
		alert("Name or ID can't be same as previous, change them!");
		return false;
	}

	document.getElementById('out').innerHTML += '"' + name + '":"' + id + '",';
	prevName.push(name);
	prevId.push(id);
	return false;
});


document.getElementById('pop').addEventListener("click", function(event) {
	prevName.pop();
	prevId.pop();
	document.getElementById('out').innerHTML = '{';

	for (var i = 0; i < prevName.length; ++i) {
		var name = prevName[i];
		var id = prevId[i];
		document.getElementById('out').innerHTML += '"' + name + '":"' + id + '",';
	}
	return false;
});