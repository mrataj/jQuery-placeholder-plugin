$(document).ready(function() {
	// Init placeholder inputs
	$('#inputName').placeholder({
		text: 'Enter your name ...',
		color: '#777',
		fontsize: '1.6em',
		top: 16,
		left: 14
	});
	
	$('#inputSurname').placeholder({
		text: 'Enter your surname ...',
		color: '#777',
		fontsize: '1.6em',
		top: 16,
		left: 14
	});
	
	$('#inputEmail').placeholder({
		text: 'Your email ...',
		color: '#777',
		fontsize: '1.6em',
		top: 16,
		left: 14
	});

	// Init button
	$('input[type="submit"]').click(function(e) {
		var name = $('#inputName').val();
		var surname = $('#inputSurname').val();
		var email = $('#inputEmail').val();
		var text = 'Person: <span class="info">' + name + ' ' + surname + '</span><br />Mail: <span class="info">' + email + '</span>';
		$('div.result').html(text);
		$('div.result').fadeIn('fast').delay(3000).fadeOut('slow');
		
		e.preventDefault();
	});
});