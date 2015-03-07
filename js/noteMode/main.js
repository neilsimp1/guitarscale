////////////////////////////////////////////////////////////////////////////////
//Imports
document.writeln("<script type='text/javascript' src='js/Chord.js'></script>");
document.writeln("<script type='text/javascript' src='js/Scale.js'></script>");
document.writeln("<script type='text/javascript' src='js/Diatonic.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/Fretboard.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/GString.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/Intervals.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/LinkedList.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/Notes.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/menu.js'></script>");
document.writeln("<script type='text/javascript' src='js/noteMode/tuner.js'></script>");
////////////////////////////////////////////////////////////////////////////////


function note_main(){
	note_fillInMenuDisplays();
	
	var numStrings = parseInt(document.getElementById('numStrings').innerHTML);
	var numFrets = parseInt(document.getElementById('numFrets').innerHTML) + 1;//Add 1 for open string
	
	var orientation = document.getElementById('hidden_neckOrientation').innerHTML;
	
	buildTuner(numStrings);
	
	
	//Gets method - i.e., are we going by the notes chooser, the scale chooser, interval chooser, or chord chooser
	//This also displays the relevant div depending on which radio button is checked
	noteAssignmentMethod = document.getElementById('hidden_noteAssignmentMethod').innerHTML;
	
	var strings = new Array(numStrings);
	var tunerArray = document.getElementsByName('tuner');
	for(var i = 0; i < numStrings; i++)
		strings[i] = new GString(tunerArray[i].innerHTML, i + 1);
	
	//Get fretboard table, numStrings x numFrets
	var fretboard_obj = new Fretboard(numStrings, numFrets, noteAssignmentMethod, strings);
	var fretboard = fretboard_obj.getFretboardTable();
	
	
	//Print out guitar neck
	printOut(numStrings, numFrets, fretboard, orientation, strings, getRoot(noteAssignmentMethod))
}



//Print fretboard
function printOut(numStrings, numFrets, fretboard, orientation, strings, root){
	var tableHtml = new String('<table id="n_outputTable">');
	
	var img = new Image();
	
	
	switch(orientation){
		
		case 'vert':
			
			tableHtml += '<tr>';
			for(var stringNum = 0; stringNum < numStrings; stringNum++)
				tableHtml += '<td style="text-align:center;"><p class="verticalText">' + strings[stringNum].pitch + '</p></td>';
			tableHtml += '</tr>';
			
			for(var fretNum = 0; fretNum < numFrets; fretNum++){
				tableHtml += '<tr class="fretRow">';
				for(var stringNum = 0; stringNum < numStrings; stringNum++){
					var selected;
					if(fretboard[stringNum][fretNum] == 0) selected = false; else selected = true;
					tableHtml += '<td class="fret"><img class="fretPic" src="' + getImgName(selected, stringNum, numStrings, fretNum, numFrets, strings, root, orientation) + '"></td>';
				}
				tableHtml += '<td>&nbsp;&nbsp;' + fretNum + '</td>';
				tableHtml += '</tr>';
			}
			tableHtml += '</table>';
			
			
			document.getElementById('n_output').innerHTML = tableHtml;
			
			break;
		
		case 'horiz':
			
			tableHtml += '<tr><td></td>';//String number row
			for(var fretNum = 0; fretNum < numFrets; fretNum++)
				tableHtml += '<td style="text-align:center;">' + fretNum + '</td>';
			tableHtml += '</tr>';
			
			for(var stringNum = (strings.length - 1); stringNum >= 0; stringNum--){
				tableHtml += '<tr class="fretRow">';
				for(var fretNum = -1; fretNum < numFrets; fretNum++){
					switch(fretNum){
						case -1:
							tableHtml += '<td class="fretRot" style="text-align:center;"><p class="horizontalText">' + strings[stringNum].pitch + '</p></td>';
							
							break;
						default:
							var selected;
							if(fretboard[stringNum][fretNum] == 0) selected = false; else selected = true;
							tableHtml += '<td class="fretRot"><img class="fretPicRot" src="' + getImgName(selected, stringNum, numStrings, fretNum, numFrets, strings, root, orientation) + '"></td>';
							
							break;
					}
				}
				tableHtml += '</tr>';
			}
			tableHtml += '</table>';
			
			
			document.getElementById('n_output').innerHTML = tableHtml;
			
			break;
	}
	
	
}




function showHideChooser(divToUnhide){
	var notesChooser = document.getElementById('notesChooser');
	var scaleChooser = document.getElementById('scaleChooser');
	var intervalChooser = document.getElementById('intervalChooser');
	var chordChooser = document.getElementById('chordChooser');
	
	switch(divToUnhide){
		case 'N':
			notesChooser.style.display = '';
			scaleChooser.style.display = 'none';
			intervalChooser.style.display = 'none';
			chordChooser.style.display = 'none';
			break;
		case 'S':
			notesChooser.style.display = 'none';
			scaleChooser.style.display = '';
			intervalChooser.style.display = 'none';
			chordChooser.style.display = 'none';
			break;
		case 'I':
			notesChooser.style.display = 'none';
			scaleChooser.style.display = 'none';
			intervalChooser.style.display = '';
			chordChooser.style.display = 'none';
			break;
		case 'C':
			notesChooser.style.display = 'none';
			scaleChooser.style.display = 'none';
			intervalChooser.style.display = 'none';
			chordChooser.style.display = '';
	}
}




////////////////Helpers
function getImgName(selected, stringNum, numStrings, fretNum, numFrets, strings, root, orientation){	
	var imgName = 'img/';
	
	if(orientation == 'vert') imgName += 'vert/';
	else imgName += 'horiz/';
	
	if(selected) imgName += 'sel';//Selected or not
	else imgName += 'fret';
	if(root == strings[stringNum].getFretPitch(fretNum)) imgName += '_rt';
	
	if(fretNum == 0) imgName += '_0';//Open string
	if(fretNum == 1) imgName += '_top';//First Fret, show bar
	if(fretNum == numFrets) imgName += '_bot';//Bottom fret, nothing on bottom
	
	var dotted = false;//Determine if fret has a dot or two
	if(fretNum == 3 || fretNum == 5 || fretNum == 7 || fretNum == 9 || fretNum == 15 || fretNum == 17 || fretNum == 19 || fretNum == 21 || fretNum == 26)
		dotted = true;
	var doubleDotted = false;
	if(fretNum == 12 || fretNum == 24)
		doubleDotted = true;
	
	if(dotted){//If it's dotted
		if(isEven(numStrings)){//Even number of strings
			var first = (numStrings / 2) - 1;//Subtract 1 for string index starting at 0
			var second = first + 1;
			
			if(stringNum == first) imgName += '_dot_r';
			else if(stringNum == second) imgName += '_dot_l';
		}
		else{//Odd number of strings
			if(stringNum == Math.floor(numStrings / 2)) imgName += '_dot'
		}
	}
	else if(doubleDotted){//If it's double dotted
		var first = 1;
		var second = numStrings - 2;//Subtract 2, one for second to last string, one for string index starting at 0
		
		if(stringNum == first || stringNum == second) imgName += '_dot';
	}
	
	
	imgName +='.png';
	return imgName;
}

function isEven(n){return (n % 2 == 0);}

function getRoot(noteAssignmentMethod){
	switch(noteAssignmentMethod){
		case 'N': //Notes chooser
			return '';
		case 'S'://Scale chooser
			return document.getElementById('scaleRoot').innerHTML;
		case 'I'://Interval chooser
			return document.getElementById('intervalRoot').innerHTML;
		case 'C'://Chord chooser
			return document.getElementById('chordRoot').innerHTML;
	}
}

////////////////