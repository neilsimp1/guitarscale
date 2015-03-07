////////////////////////////////////////////////////////////////////////////////
//Imports
//document.writeln("<script type='text/javascript' src='js/Chord.js'></script>");
document.writeln("<script type='text/javascript' src='js/Scale.js'></script>");
//document.writeln("<script type='text/javascript' src='js/Diatonic.js'></script>");
document.writeln("<script type='text/javascript' src='js/tunerMode/menu.js'></script>");
////////////////////////////////////////////////////////////////////////////////


function tuner_main(){
	tuner_initFields();
	
	var canvas = document.getElementById('canvas_staff');
	var ctx = canvas.getContext('2d');
	
	var img = new Image();
	img.src = 'img/staff.png';
	img.onload = function(){
		ctx.drawImage(img, 0, 0, 170, 136);
	}
	
	var notes = getNotes();
	var note = getCurrentNote(notes);
	
	tuner_fillInMenuDisplays(note);
	
	
	
	
	var currentState = document.getElementById('hidden_playState').value;
	switch(currentState){
		case 'play':
			osc_go();
			break;
		case 'pause':
			osc_stop();
			break;
	}
}



function tuner_initFields(){
	if(document.getElementById('hidden_currentNote').value == '')
		document.getElementById('hidden_currentNote').value = 'E2';
	if(document.getElementById('hidden_oscillatorType').value == '')
		document.getElementById('hidden_oscillatorType').value = 'sine';
	if(document.getElementById('hidden_playState').value == '')
		document.getElementById('hidden_playState').value = 'pause';
}

function getNotes(){
	var notes;
	
	var xhr = new XMLHttpRequest();
	var url = "data/notes.json";
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			var json = JSON.parse(xhr.responseText);
			notes = json.notes;
		}
	}
	
	xhr.open('GET', url, false);
	xhr.send();
	
	return notes;
}

function getCurrentNote(notes){
	for(var i = 0; i < notes.length; i++)
		if(notes[i].note == document.getElementById('hidden_currentNote').value)
			return notes[i];
	return;
}

function getCurrentNoteIndex(notes){
	for(var i = 0; i < notes.length; i++)
		if(notes[i].note == document.getElementById('hidden_currentNote').value)
			return i;
	return;
}

function changeNote(direction){
	var notes = getNotes();
	var curIndex = getCurrentNoteIndex(notes);
	
	switch(direction){
		case 'down':
			if(curIndex == 0) curIndex = 1;
			document.getElementById('hidden_currentNote').value = notes[curIndex - 1].note;
			osc_stop();
			$(document).trigger('change');
			break;
		case 'up':
			if(curIndex >= notes.length - 1) curIndex = notes.length - 2;
			document.getElementById('hidden_currentNote').value = notes[curIndex + 1].note;
			osc_stop();
			$(document).trigger('change');
			break;
	}
}

var audio_context, oscillator, gainNode;
var contextClass = (window.AudioContext || window.webkitAudioContext ||
					window.mozAudioContext || window.oAudioContext ||
					window.msAudioContext);
(function init(window){
	if(!audio_context) audio_context = new contextClass();
}(window));
function init_osc(){
	try{
		oscillator = audio_context.createOscillator();
		gainNode = audio_context.createGain ? 
					audio_context.createGain() : audio_context.createGainNode();
		
		oscillator.connect(audio_context.destination);
		oscillator.connect(gainNode);
		gainNode.connect(audio_context.destination);
		gainNode.gain.value = 0.9;
		
		var frequency = document.getElementById('span_currentNote_frequency').innerHTML.replace('Hz','');
		frequency = parseFloat(frequency);
		oscillator.frequency.value = frequency;
		oscillator.type = document.getElementById('hidden_oscillatorType').value;
	}
	catch(e){
		alert('No web audio oscillator support in this browser');
	}
}

function setPlayState(playOrPause){
	switch(playOrPause){
		case 'play':
			document.getElementById('hidden_playState').value = 'play';
			$(document).trigger('change');
			break;
		case 'pause':
			document.getElementById('hidden_playState').value = 'pause';
			$(document).trigger('change');
			break;
	}
}

function setOscType(a){
	document.getElementById('hidden_oscillatorType').value = a.getAttribute('id').replace('a_oscType_', '');
	osc_stop();
	$(document).trigger('change');
}

function playPause_click(){
	var currentState = document.getElementById('hidden_playState').value;
	switch(currentState){
		case 'play':
			setPlayState('pause');
			break;
		case 'pause':
			setPlayState('play');
			break;
	}
}

function osc_go(){	
	init_osc();
	oscillator.start();
}
function osc_stop(){try{oscillator.stop();}catch(e){}}