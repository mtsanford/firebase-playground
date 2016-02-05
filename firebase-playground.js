$(function() {
	var fbRef = new Firebase('https://burning-torch-5337.firebaseio.com/');
	var itemsRef = fbRef.child('/firebase-playground/items');

	itemsRef.on("child_added", function(snapshot, prevChildKey) {
	  var newItem = snapshot.key();
	  $('<li></li>').text(newItem).appendTo('#data');
	});
	
	$('#add').click(function() {
		itemsRef.child('prunes').set(true);
		console.log('clicked');
	})
});
