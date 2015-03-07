function tuner_fillInMenuDisplays(note){
	//Current note - notename
	document.getElementById('span_currentNote_notename').innerHTML = note.notename;
	//Current note - note
	document.getElementById('span_currentNote_note').innerHTML = note.note;
	//Current note - frequency
	document.getElementById('span_currentNote_frequency').innerHTML = note.frequency + 'Hz';
	//Current note - special
	if(note.special) showNoteSpecial(note.special);
	else document.getElementById('div_notespecial').innerHTML = '';
	
}


function showNoteSpecial(special){
	var div = document.getElementById('div_notespecial');
	
	switch(special){
		case 'lowlowE':
			div.innerHTML = special;
			break;
		case 'f#':
			div.innerHTML = special;
			break;
		case 'lowb':
			div.innerHTML = special;
			break;
		case 'lowE':
			div.innerHTML = special;
			break;
		case 'a':
			div.innerHTML = special;
			break;
		case 'd':
			div.innerHTML = special;
			break;
		case 'g':
			div.innerHTML = special;
			break;
		case 'b':
			div.innerHTML = special;
			break;
		case 'e':
			div.innerHTML = special;
			break;
	}
}