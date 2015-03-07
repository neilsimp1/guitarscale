function note_fillInMenuDisplays(){
	//numStrings
	if(document.getElementById('hidden_numStrings').innerHTML == ''){
		document.getElementById('hidden_numStrings').innerHTML = '6';
		document.getElementById('numStrings').innerHTML = '6';
	}
	else document.getElementById('numStrings').innerHTML = document.getElementById('hidden_numStrings').innerHTML;
	
	//numFrets
	if(document.getElementById('hidden_numFrets').innerHTML == ''){
		document.getElementById('hidden_numFrets').innerHTML = '24';
		document.getElementById('numFrets').innerHTML = '24';
	}
	else document.getElementById('numFrets').innerHTML = document.getElementById('hidden_numFrets').innerHTML;
	
	//noteAssignmentMethod
	if(document.getElementById('hidden_noteAssignmentMethod').innerHTML == '')
		document.getElementById('hidden_noteAssignmentMethod').innerHTML = 'N';
	
	//scaleRoot
	if(document.getElementById('hidden_scaleRoot').innerHTML == ''){
		document.getElementById('hidden_scaleRoot').innerHTML = 'C';
		document.getElementById('scaleRoot').innerHTML = 'C';
	}
	else document.getElementById('scaleRoot').innerHTML = document.getElementById('hidden_scaleRoot').innerHTML;
	
	//scaleDisplay
	var scaleName = document.getElementById('hidden_scale').innerHTML;
	if(scaleName == ''){
		document.getElementById('hidden_scale').innerHTML = 'Major';
		document.getElementById('scaleDisplay').innerHTML = makeScaleLink('Major');
	}
	else document.getElementById('scaleDisplay').innerHTML = makeScaleLink(scaleName);
	
	//scalePattern
	if(document.getElementById('hidden_scalePattern').innerHTML == '')
		document.getElementById('hidden_scalePattern').innerHTML = '221222';
	
	//Interval root
	if(document.getElementById('hidden_intervalRoot').innerHTML == ''){
		document.getElementById('hidden_intervalRoot').innerHTML = 'C';
		document.getElementById('intervalRoot').innerHTML = 'C';
	}
	else document.getElementById('intervalRoot').innerHTML = document.getElementById('hidden_intervalRoot').innerHTML;
	
	//intervalsDisplay
	if(document.getElementById('hidden_intervalsDisplay').innerHTML !== '')
		document.getElementById('intervalsDisplay').innerHTML = document.getElementById('hidden_intervalsDisplay').innerHTML;
	else document.getElementById('intervalsDisplay').innerHTML = '';
	
	//Chord root
	if(document.getElementById('hidden_chordRoot').innerHTML == ''){
		document.getElementById('hidden_chordRoot').innerHTML = 'C';
		document.getElementById('chordRoot').innerHTML = 'C';
	}
	else document.getElementById('chordRoot').innerHTML = document.getElementById('hidden_chordRoot').innerHTML;
	
	//chordPattern
	if(document.getElementById('hidden_chordIntervals').innerHTML == '')
		document.getElementById('hidden_chordIntervals').innerHTML = '43';
	
	//chordDisplay
	var chordName = document.getElementById('hidden_chordName').innerHTML;
	if(chordName == ''){
		document.getElementById('hidden_chordName').innerHTML = 'Major';
		document.getElementById('chordDisplay').innerHTML = makeChordLink('Major');
	}
	else document.getElementById('chordDisplay').innerHTML = makeChordLink(chordName);
	
	//neckOrientation
	if(document.getElementById('hidden_neckOrientation').innerHTML == '')
		document.getElementById('hidden_neckOrientation').innerHTML = 'vert';
	
	
}
function makeScaleLink(scaleName){return '<a id="scaleButton" class="pointer hoverable" onclick="scale_click();">' + scaleName + '</a>';}
function makeChordLink(chordName){return '<a id="chordButton" class="pointer hoverable" onclick="chord_click();">' + chordName + '</a>';}

function numStrings_click(){
	assignMenu('numStrings');
	slideOutTransition();
}
function numFrets_click(){
	assignMenu('numFrets');
	slideOutTransition();
}
function tuner_click(a){
	var strNum = a.getAttribute('id').substring(5);
	document.getElementById('hidden_str').innerHTML = strNum;
	assignMenu('tuner');
	slideOutTransition();
}
function noteAssignmentMethod_click(a){
	var mode = a.innerHTML.charAt(0).toUpperCase();
	document.getElementById('hidden_noteAssignmentMethod').innerHTML = mode;
	showHideChooser(mode);
	
	document.getElementById('note_slideoutMenu').classList.add('slide');
	document.getElementById('note_slideDownMenu').classList.add('slide');
	
	$(document).trigger('change');
}
function notesChooser_click(a){
	var onOrOff = a.getAttribute('id').charAt(0);
	var note = a.innerHTML;
	
	if(onOrOff == '1'){//turn off
		document.getElementById('hidden_note_' + note).innerHTML = 0;
		document.getElementById('0_' + note).style.visibility = 'visible';
	}
	else{//turn on
		document.getElementById('hidden_note_' + note).innerHTML = 1;
		document.getElementById('1_' + note).style.visibility = 'visible';
	}
	a.style.visibility = 'hidden';
	
	$(document).trigger('change');
}
function scaleRoot_click(){
	assignMenu('scaleRoot');
	slideOutTransition();
}
function scale_click(){
	assignMenu('scale');
	slideDownTransition();
}
function intervalRoot_click(){
	assignMenu('intervalRoot');
	slideOutTransition();
}
function interval_click(a){
	var interval = parseInt(a.getAttribute('id').slice(-1));
	addInterval(interval);
	
	$(document).trigger('change');
}
function intervalClearButton_click(){
	clearIntervals();
	$(document).trigger('change');
}
function chordRoot_click(){
	assignMenu('chordRoot');
	slideOutTransition();
}
function chord_click(){
	assignMenu('chord');
	slideDownTransition();
}
function l_rButton_click(){flipTuner();$(document).trigger('change');}
function v_hButton_click(){
	if(document.getElementById('hidden_neckOrientation').innerHTML == 'horiz')
		document.getElementById('hidden_neckOrientation').innerHTML = 'vert';
	else document.getElementById('hidden_neckOrientation').innerHTML = 'horiz';
	
	$(document).trigger('change');
}
//Menu slides
function showHide_NoteModeMenu(){
	if(document.getElementById('noteModeMenu').classList.contains('slide')){//Move right
		document.getElementById('noteModeMenu').classList.remove('slide');
		
		var src = document.getElementById('img_showHide_NoteModeMenu').getAttribute('src');
		src = src.replace('_r', '_l');
		document.getElementById('img_showHide_NoteModeMenu').setAttribute('src', src);
		
		document.getElementById('n_output').classList.remove('slide');
	}
	else{//Move left
		document.getElementById('noteModeMenu').classList.add('slide');
		
		var src = document.getElementById('img_showHide_NoteModeMenu').getAttribute('src');
		src = src.replace('_l', '_r');
		document.getElementById('img_showHide_NoteModeMenu').setAttribute('src', src);
		
		document.getElementById('note_slideoutMenu').classList.add('slide');
		document.getElementById('note_slideDownMenu').classList.add('slide');
		
		document.getElementById('n_output').classList.add('slide');
	}	
}
function slideUpTransition(){
	document.getElementById('note_slideDownMenu').classList.add('slide');
}
function slideDownTransition(){
	slideInTransition();
	
	if(document.getElementById('note_slideDownMenu').classList.contains('slide'))
		document.getElementById('note_slideDownMenu').classList.remove('slide');
	else document.getElementById('note_slideDownMenu').classList.add('slide');
}
function slideInTransition(){
	document.getElementById('note_slideoutMenu').classList.add('slide');
}
function slideOutTransition(){
	slideUpTransition();
	
	if(document.getElementById('note_slideoutMenu').classList.contains('slide'))
		document.getElementById('note_slideoutMenu').classList.remove('slide');
	else document.getElementById('note_slideoutMenu').classList.add('slide');
}



//Change guitar setup
function setNumStrings(str){
	document.getElementById('hidden_numStrings').innerHTML = str.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setNumFrets(fret){
	document.getElementById('hidden_numFrets').innerHTML = fret.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setTuning(pitch){
	var strNum = document.getElementById('hidden_str').innerHTML;
	document.getElementById('hidden_str' + strNum).innerHTML = pitch.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setScaleRoot(pitch){
	document.getElementById('hidden_scaleRoot').innerHTML = pitch.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setScale(scale){
	document.getElementById('hidden_scale').innerHTML = scale.innerHTML;
	document.getElementById('hidden_scalePattern').innerHTML = scale.getAttribute('name');
	slideUpTransition();
	$(document).trigger('change');
}
function setIntervalRoot(pitch){
	document.getElementById('hidden_intervalRoot').innerHTML = pitch.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setChordRoot(pitch){
	document.getElementById('hidden_chordRoot').innerHTML = pitch.innerHTML;
	slideInTransition();
	$(document).trigger('change');
}
function setChord(chord){
	document.getElementById('hidden_chordName').innerHTML = chord.innerHTML;
	document.getElementById('hidden_chordIntervals').innerHTML = chord.getAttribute('name');
	slideUpTransition();
	$(document).trigger('change');
}

//Assign menu to note_slideoutMenu
function assignMenu(menu){
	switch(menu){
		case 'numStrings':
			var menustr = '<table id="note_slideoutMenuTable">';
			for(var strNum = 4; strNum <= 12; strNum++){
				menustr += '<tr><td style="text-align:center;"><a id="str' + strNum +'" class="pointer hoverable" onclick="setNumStrings(this);">' + strNum +'</a></td></tr>';
			}
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;
		
		case 'numFrets':
			var menustr = '<table id="note_slideoutMenuTable">';
			for(var fretNum = 17; fretNum <= 27; fretNum++){
				menustr += '<tr><td style="text-align:center;"><a id="fret' + fretNum +'" class="pointer hoverable" onclick="setNumFrets(this);">' + fretNum +'</a></td></tr>';
			}
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;
			
		
		case 'tuner':
			var menustr = '<table id="note_slideoutMenuTable">';
				menustr += '<tr><td style="text-align:center;"><a id="1" class="pointer hoverable" onclick="setTuning(this);">C</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="2" class="pointer hoverable" onclick="setTuning(this);">C#Db</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="3" class="pointer hoverable" onclick="setTuning(this);">D</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="4" class="pointer hoverable" onclick="setTuning(this);">D#Eb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="5" class="pointer hoverable" onclick="setTuning(this);">E</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="6" class="pointer hoverable" onclick="setTuning(this);">F</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="7" class="pointer hoverable" onclick="setTuning(this);">F#Gb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="8" class="pointer hoverable" onclick="setTuning(this);">G</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="9" class="pointer hoverable" onclick="setTuning(this);">G#Ab</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="10" class="pointer hoverable" onclick="setTuning(this);">A</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="11" class="pointer hoverable" onclick="setTuning(this);">A#Bb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="12" class="pointer hoverable" onclick="setTuning(this);">B</a></td></tr>';
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;	
		
		case 'scaleRoot':
			var menustr = '<table id="note_slideoutMenuTable">';
				menustr += '<tr><td style="text-align:center;"><a id="1" class="pointer hoverable" onclick="setScaleRoot(this);">C</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="2" class="pointer hoverable" onclick="setScaleRoot(this);">C#Db</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="3" class="pointer hoverable" onclick="setScaleRoot(this);">D</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="4" class="pointer hoverable" onclick="setScaleRoot(this);">D#Eb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="5" class="pointer hoverable" onclick="setScaleRoot(this);">E</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="6" class="pointer hoverable" onclick="setScaleRoot(this);">F</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="7" class="pointer hoverable" onclick="setScaleRoot(this);">F#Gb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="8" class="pointer hoverable" onclick="setScaleRoot(this);">G</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="9" class="pointer hoverable" onclick="setScaleRoot(this);">G#Ab</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="10" class="pointer hoverable" onclick="setScaleRoot(this);">A</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="11" class="pointer hoverable" onclick="setScaleRoot(this);">A#Bb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="12" class="pointer hoverable" onclick="setScaleRoot(this);">B</a></td></tr>';
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;
		
		case 'intervalRoot':
			var menustr = '<table id="note_slideoutMenuTable">';
				menustr += '<tr><td style="text-align:center;"><a id="1" class="pointer hoverable" onclick="setIntervalRoot(this);">C</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="2" class="pointer hoverable" onclick="setIntervalRoot(this);">C#Db</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="3" class="pointer hoverable" onclick="setIntervalRoot(this);">D</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="4" class="pointer hoverable" onclick="setIntervalRoot(this);">D#Eb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="5" class="pointer hoverable" onclick="setIntervalRoot(this);">E</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="6" class="pointer hoverable" onclick="setIntervalRoot(this);">F</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="7" class="pointer hoverable" onclick="setIntervalRoot(this);">F#Gb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="8" class="pointer hoverable" onclick="setIntervalRoot(this);">G</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="9" class="pointer hoverable" onclick="setIntervalRoot(this);">G#Ab</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="10" class="pointer hoverable" onclick="setIntervalRoot(this);">A</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="11" class="pointer hoverable" onclick="setIntervalRoot(this);">A#Bb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="12" class="pointer hoverable" onclick="setIntervalRoot(this);">B</a></td></tr>';
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;
			
		case 'chordRoot':
			var menustr = '<table id="note_slideoutMenuTable">';
				menustr += '<tr><td style="text-align:center;"><a id="1" class="pointer hoverable" onclick="setChordRoot(this);">C</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="2" class="pointer hoverable" onclick="setChordRoot(this);">C#Db</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="3" class="pointer hoverable" onclick="setChordRoot(this);">D</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="4" class="pointer hoverable" onclick="setChordRoot(this);">D#Eb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="5" class="pointer hoverable" onclick="setChordRoot(this);">E</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="6" class="pointer hoverable" onclick="setChordRoot(this);">F</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="7" class="pointer hoverable" onclick="setChordRoot(this);">F#Gb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="8" class="pointer hoverable" onclick="setChordRoot(this);">G</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="9" class="pointer hoverable" onclick="setChordRoot(this);">G#Ab</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="10" class="pointer hoverable" onclick="setChordRoot(this);">A</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="11" class="pointer hoverable" onclick="setChordRoot(this);">A#Bb</a></td></tr>';
				menustr += '<tr><td style="text-align:center;"><a id="12" class="pointer hoverable" onclick="setChordRoot(this);">B</a></td></tr>';
			menustr += '</table>';
			document.getElementById('note_slideoutMenu').innerHTML = menustr;
			break;
		
		case 'scale':
			getScales(function(scales){setScalePanel(scales)});			
			break;
		case 'chord':			
			getChords(function(chords){setChordPanel(chords)});			
			break;
	}
}