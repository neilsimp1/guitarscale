//Class Fretboard
function Fretboard(numStrings, numFrets, noteAssignmentMethod, strings){
	
	////////Constructor	
	this.numStrings = numStrings;
	this.numFrets = numFrets;
	this.noteAssignmentMethod = noteAssignmentMethod;
	this.strings = strings;
	
	
	//2D Array - Strings X Frets
	var fretboard = new Array(parseInt(numStrings));
	for(var i = 0; i < numStrings; i++) fretboard[i] = new Array(numFrets);
	
	//Initialize all to 0
	for(var stringNum = 0; stringNum < numStrings; stringNum++)
		for(var fretNum = 0; fretNum < numFrets; fretNum++)
			fretboard[stringNum][fretNum] = 0;
	
	
	this.fretboard = makeFretboard(numStrings, numFrets, noteAssignmentMethod);
	
	///////////////////
	
	
	
	this.makeFretboard = makeFretboard;
	function makeFretboard(numStrings, numFrets, noteAssignmentMethod){
		
		//Switch, depending on note assigner, scale chooser,  interval/scale builder, or chord chooser
		switch(noteAssignmentMethod){
			case 'N': //Notes chooser
				var notes = new Notes(new Array());
				
				for(var stringNum = 0; stringNum < numStrings; stringNum++)
					for(var fretNum = 0; fretNum < numFrets; fretNum++)
						if(notes.contains(strings[stringNum].getFretPitch(fretNum)))
							fretboard[stringNum][fretNum] = 1;
				break;
			case 'S'://Scale chooser
				var scalePattern = document.getElementById('hidden_scalePattern').innerHTML;
				var root = document.getElementById('scaleRoot').innerHTML;
				var scale = new Scale(root, scalePattern, new Array());
				
				for(var stringNum = 0; stringNum < numStrings; stringNum++)
					for(var fretNum = 0; fretNum < numFrets; fretNum++)
						if(scale.contains(strings[stringNum].getFretPitch(fretNum)))
							fretboard[stringNum][fretNum] = 1;
				break;
			case 'I'://Interval chooser
				var intervalPattern = getIntervalPattern();
				var root = document.getElementById('intervalRoot').innerHTML;
				var intervals = new Intervals(root, intervalPattern, new Array());
				
				for(var stringNum = 0; stringNum < numStrings; stringNum++)
					for(var fretNum = 0; fretNum < numFrets; fretNum++)
						if(intervals.contains(strings[stringNum].getFretPitch(fretNum)))
							fretboard[stringNum][fretNum] = 1;
				break;
			case 'C'://Chord chooser
				var chordName = document.getElementById('chordButton').innerHTML;
				var intervals = document.getElementById('hidden_chordIntervals').innerHTML;
				var root = document.getElementById('chordRoot').innerHTML;
				var chord = new Chord(chordName, intervals, root);
				
				for(var stringNum = 0; stringNum < numStrings; stringNum++)
					for(var fretNum = 0; fretNum < numFrets; fretNum++)
						if(chord.contains(strings[stringNum].getFretPitch(fretNum)))
							fretboard[stringNum][fretNum] = 1;
				break;
		}
	}
	
	this.getFretboardTable = getFretboardTable;
	function getFretboardTable(){
		return fretboard;
	}
	
	
	this.makeLeftHanded = makeLeftHanded;
	function makeLeftHanded(){
		
	}
}