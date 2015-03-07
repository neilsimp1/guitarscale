//Class Chord
function Chord(chordName, intervals, root){
	
	////////Constructor
	this.root = root;
	this.name = chordName;
	this.intervals = intervals;
	this.notes = getNotes(this.root, this.intervals.split(''));
	notes = this.notes;
	///////////////////
	
	
	//Takes a series of intervals, for each root, and returns array of notes
	//1 = half step, 2 = whole step, 3 = 1.5 step, 4 = 2 step...
	function getNotes(root, intervals){
		var diatonic = new Diatonic(root);
		var noteArray = new Array();
		noteArray[0] = root;
		
		if(intervals !== '&nbsp;'){
			for(var i = 0; i < intervals.length; i++){
				noteArray[i + 1] = diatonic.getNextNote(intervals[i]);
			}
		}
		return noteArray;
	}
	
	this.contains = contains;
	function contains(note){
		for(var i = 0; i < notes.length; i++){
			if(notes[i] == note){
				return true;
			}
		}
		return false;
	}
}

////Interval reference
//Perfect unison = 0
//Minor second = 1
//Major second = 2
//Minor third = 3
//Major third = 4
//Perfect fourth = 5
//Aug fourth/Dim fifth = 6
//Perfect fifth = 7
//Minor sixth = 8
//Major sixth = 9
//Minor seventh = 10
//Major seventh = 11
//This works by adding to last note, not root, ex. 343 for minor seventh chord

function setChordPanel(chords){
	var chordPanelString = '<table id="chordTable">';
	chordPanelString += '	<tr>';
	
		var i = 0;
		var curGroup = chords[0].group;
		
		chordPanelString += '<td><ul>';
		while(i < chords.length){
			if(chords[i].group !== curGroup){//Moved to next group
				curGroup = chords[i].group;
				chordPanelString += '</ul></td><td><ul>';
			}
			
			chordPanelString += '<li><a name="' + chords[i].intervals + '" class="pointer hoverable" onclick="setChord(this);">' + chords[i].name + '</a></li>';
			i++;
		}
		chordPanelString += '</ul></td>';
	
	chordPanelString += '	</tr>';
	chordPanelString += '</table>';
	
	
	document.getElementById('note_slideDownMenu').innerHTML = chordPanelString;
}


function getChords(func){
	var xhr = new XMLHttpRequest();
	var url = "data/chords.json";
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			var json = JSON.parse(xhr.responseText);
			func(json.chords);
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}