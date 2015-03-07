//Class Scale
function Scale(root, scalePattern, notes){
	
	////////Constructor
	this.root = root;
	this.scalePattern = scalePattern;
	this.notes = getNotes(scalePattern);
	notes = this.notes;
	///////////////////
	
	
	
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
	function getNotes(scalePattern){
		var diatonic = new Diatonic(root);
		var noteArray = new Array();
		noteArray[0] = root;
		
		if(scalePattern !== '&nbsp;'){
			for(var i = 0; i < scalePattern.length; i++){
				noteArray[i + 1] = diatonic.getNextNote(scalePattern[i]);
			}
		}
		return noteArray;
	}
}


function setScalePanel(scales){
	var scalePanelString = '<table id="scaleTable">';
	scalePanelString += '	<tr>';
	
		var i = 0;
		var curGroup = scales[0].group;
		
		scalePanelString += '<td><ul>';
		while(i < scales.length){
			if(scales[i].group !== curGroup){//Moved to next group
				curGroup = scales[i].group;
				scalePanelString += '</ul></td><td><ul>';
			}
			
			scalePanelString += '<li><a name="' + scales[i].intervals + 
								'" class="pointer hoverable" onclick="setScale(this);">' + scales[i].name + '</a></li>';
			i++;
		}
		scalePanelString += '</ul></td>';
	
	scalePanelString += '	</tr>';
	scalePanelString += '</table>';
	
	
	document.getElementById('note_slideDownMenu').innerHTML = scalePanelString;
}


function getScales(func){
	var xhr = new XMLHttpRequest();
	var url = "data/scales.json";
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			var json = JSON.parse(xhr.responseText);
			func(json.scales);
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}