//Class Notes
function Notes(notes){
	this.notes = notes;
	var count = 0;
	
	if(document.getElementById('hidden_note_C').innerHTML == 1){
		this.notes[count] = 'C';
		count++;
	}
	if(document.getElementById('hidden_note_C#Db').innerHTML == 1){
		this.notes[count] = 'C#Db';
		count++;
	}
	if(document.getElementById('hidden_note_D').innerHTML == 1){
		this.notes[count] = 'D';
		count++;
	}
	if(document.getElementById('hidden_note_D#Eb').innerHTML == 1){
		this.notes[count] = 'D#Eb';
		count++;
	}
	if(document.getElementById('hidden_note_E').innerHTML == 1){
		this.notes[count] = 'E';
		count++;
	}
	if(document.getElementById('hidden_note_F').innerHTML == 1){
		this.notes[count] = 'F';
		count++;
	}
	if(document.getElementById('hidden_note_F#Gb').innerHTML == 1){
		this.notes[count] = 'F#Gb';
		count++;
	}
	if(document.getElementById('hidden_note_G').innerHTML == 1){
		this.notes[count] = 'G';
		count++;
	}
	if(document.getElementById('hidden_note_G#Ab').innerHTML == 1){
		this.notes[count] = 'G#Ab';
		count++;
	}
	if(document.getElementById('hidden_note_A').innerHTML == 1){
		this.notes[count] = 'A';
		count++;
	}
	if(document.getElementById('hidden_note_A#Bb').innerHTML == 1){
		this.notes[count] = 'A#Bb';
		count++;
	}
	if(document.getElementById('hidden_note_B').innerHTML == 1){
		this.notes[count] = 'B';
		count++;
	}
	
	
	//Function to check if current note is selected
	this.contains = contains;
	function contains(note){
		for(var i = 0; i < this.notes.length; i++){
			if(note == this.notes[i]){
				return true;
			}
		}
		return false;
	}
}