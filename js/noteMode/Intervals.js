//Class Intervals
function Intervals(root, intervalPattern, notes){
	this.root = root;
	this.intervalPattern = intervalPattern;
	this.notes = getNotes(intervalPattern);
	notes = this.notes;
	
	//Function to check if current note is in scale
	this.contains = contains;
	function contains(note){
		for(var i = 0; i < notes.length; i++){
			if(notes[i] == note){
				return true;
			}
		}
		return false;
	}
	
	//Takes a series of intervals, for each root, and returns array of notes
	//1 = half step, 2 = whole step, 3 = 1.5 step, 4 = 2 step...
	function getNotes(intervalPattern){
		var diatonic = new Diatonic(root);
		var noteArray = new Array();
		noteArray[0] = root;
		
		if(intervalPattern !== '&nbsp;'){
			for(var i = 0; i < intervalPattern.length; i++){
				noteArray[i + 1] = diatonic.getNextNote(intervalPattern[i]);
			}
		}
		return noteArray;
	}
}



function addInterval(interval){
	switch(interval){
		case 0:
			document.getElementById('hidden_intervalsCounter').innerHTML += '1';
			document.getElementById('hidden_intervalsDisplay').innerHTML += 'half ';
			break;
		case 1:
			document.getElementById('hidden_intervalsCounter').innerHTML += '2';
			document.getElementById('hidden_intervalsDisplay').innerHTML += 'whole ';
			break;
		case 2:
			document.getElementById('hidden_intervalsCounter').innerHTML += '3';
			document.getElementById('hidden_intervalsDisplay').innerHTML += '1 1/2 ';
			break;
		case 3:
			document.getElementById('hidden_intervalsCounter').innerHTML += '4';
			document.getElementById('hidden_intervalsDisplay').innerHTML += 'two ';
			break;
		
	}	
	
	var scaleFullness = getScaleFullness();
	switch(scaleFullness){
		case 11:
			document.getElementById('intervals_0').style.visibility = 'hidden';
			document.getElementById('intervals_1').style.visibility = 'hidden';
			document.getElementById('intervals_2').style.visibility = 'hidden';
			document.getElementById('intervals_3').style.visibility = 'hidden';
			break;
		case 10:
			document.getElementById('intervals_0').style.visibility = 'visible';
			document.getElementById('intervals_1').style.visibility = 'hidden';
			document.getElementById('intervals_2').style.visibility = 'hidden';
			document.getElementById('intervals_3').style.visibility = 'hidden';
			break;
		case 9:
			document.getElementById('intervals_0').style.visibility = 'visible';
			document.getElementById('intervals_1').style.visibility = 'visible';
			document.getElementById('intervals_2').style.visibility = 'hidden';
			document.getElementById('intervals_3').style.visibility = 'hidden';
			break;
		case 8:
			document.getElementById('intervals_0').style.visibility = 'visible';
			document.getElementById('intervals_1').style.visibility = 'visible';
			document.getElementById('intervals_2').style.visibility = 'visible';
			document.getElementById('intervals_3').style.visibility = 'hidden';
			break;
		default:
			document.getElementById('intervals_0').style.visibility = 'visible';
			document.getElementById('intervals_1').style.visibility = 'visible';
			document.getElementById('intervals_2').style.visibility = 'visible';
			document.getElementById('intervals_3').style.visibility = 'visible';
	}
}

function getScaleFullness(){
	var total = 0;
	for(var i = 0; i < document.getElementById('hidden_intervalsCounter').innerHTML.length; i++)
		total += parseInt(document.getElementById('hidden_intervalsCounter').innerHTML[i]);
	return total;
}

function getIntervalPattern(){return document.getElementById('hidden_intervalsCounter').innerHTML;}

function clearIntervals(){
	document.getElementById('hidden_intervalsCounter').innerHTML = '';
	document.getElementById('hidden_intervalsDisplay').innerHTML = '';
}