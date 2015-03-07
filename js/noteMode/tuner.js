////Builds html string of links to insert in menu
function buildTuner(numStrings){
	
	var tunerString;
	if(numOfStringsChanged(numStrings)){
		setHiddenDefaultTuners(numStrings);
		tunerString = buildTunerString(numStrings, getDefault(numStrings));
	}
	else tunerString = buildTunerString(numStrings, getCurrentTuning(numStrings));
	
	document.getElementById('tuner').innerHTML = tunerString;
}

function buildTunerString(numStrings, tuning){
	var width;
	if(numStrings > 6) width = Math.floor(100 / (Math.ceil(numStrings / 2)));
	else width = Math.floor(100 / numStrings);
	
	var tunerString = '<table id="tuners"><tr>';
	for (var i = 0; i < tuning.length; i++){
		var strNum = i + 1;
		
		tunerString += '<td width="' + width +'%"><a id="tuner' + strNum + '" name="tuner" class="pointer hoverable" onclick="tuner_click(this);">' + document.getElementById('hidden_str' + [strNum]).innerHTML + '</a></td>';
		var half = tuning.length / 2;
		if(strNum == Math.ceil(tuning.length / 2) && (numStrings > 6))
			tunerString += '</tr><tr>';
	}
	tunerString += '</tr></table>';
	
	return tunerString;
}

function getDefault(numStrings){	
	switch(numStrings){
		case 4:
			return new Array("E", "A", "D", "G");
			break;
		case 5:
			return new Array("B", "E", "A", "D", "G");
			break;
		case 6:
			return new Array("E", "A", "D", "G", "B", "E");
			break;
		case 7:
			return new Array("B", "E", "A", "D", "G", "B", "E");
			break;
		case 8:
			return new Array("F#Gb", "B", "E", "A", "D", "G", "B", "E");
			break;
		case 9:
			return new Array("C#Db", "F#Gb", "B", "E", "A", "D", "G", "B", "E");
			break;
		case 10:
			return new Array("E", "A", "D", "G", "E", "A", "D", "G", "B", "E");
			break;
		case 11:
			return new Array("B", "E", "A", "D", "G", "E", "A", "D", "G", "B", "E");
			break;
		case 12:
			return new Array("E", "E", "A", "A", "D", "D", "G", "G", "B", "B", "E", "E");
			break;
		default:
			return null;
	}
}

function numOfStringsChanged(numStrings){
	if(numStrings !== parseInt(document.getElementById('hidden_numStringsStore').innerHTML)){
		document.getElementById('hidden_numStringsStore').innerHTML = numStrings;
		return true;
	}
	else return false;
}

function setHiddenDefaultTuners(numStrings){
	switch(numStrings){
		case 4:
			document.getElementById('hidden_str1').innerHTML = "E";
			document.getElementById('hidden_str2').innerHTML = "A";
			document.getElementById('hidden_str3').innerHTML = "D";
			document.getElementById('hidden_str4').innerHTML = "G";
			break;
		case 5:
			document.getElementById('hidden_str1').innerHTML = "B";
			document.getElementById('hidden_str2').innerHTML = "E";
			document.getElementById('hidden_str3').innerHTML = "A";
			document.getElementById('hidden_str4').innerHTML = "D";
			document.getElementById('hidden_str5').innerHTML = "G";
			break;
		case 6:
			document.getElementById('hidden_str1').innerHTML = "E";
			document.getElementById('hidden_str2').innerHTML = "A";
			document.getElementById('hidden_str3').innerHTML = "D";
			document.getElementById('hidden_str4').innerHTML = "G";
			document.getElementById('hidden_str5').innerHTML = "B";
			document.getElementById('hidden_str6').innerHTML = "E";
			break;
		case 7:
			document.getElementById('hidden_str1').innerHTML = "B";
			document.getElementById('hidden_str2').innerHTML = "E";
			document.getElementById('hidden_str3').innerHTML = "A";
			document.getElementById('hidden_str4').innerHTML = "D";
			document.getElementById('hidden_str5').innerHTML = "G";
			document.getElementById('hidden_str6').innerHTML = "B";
			document.getElementById('hidden_str7').innerHTML = "E";
			break;
		case 8:
			document.getElementById('hidden_str1').innerHTML = "F#Gb";
			document.getElementById('hidden_str2').innerHTML = "B";
			document.getElementById('hidden_str3').innerHTML = "E";
			document.getElementById('hidden_str4').innerHTML = "A";
			document.getElementById('hidden_str5').innerHTML = "D";
			document.getElementById('hidden_str6').innerHTML = "G";
			document.getElementById('hidden_str7').innerHTML = "B";
			document.getElementById('hidden_str8').innerHTML = "E";
			break;
		case 9:
			document.getElementById('hidden_str1').innerHTML = "C#Db";
			document.getElementById('hidden_str2').innerHTML = "F#Gb";
			document.getElementById('hidden_str3').innerHTML = "B";
			document.getElementById('hidden_str4').innerHTML = "E";
			document.getElementById('hidden_str5').innerHTML = "A";
			document.getElementById('hidden_str6').innerHTML = "D";
			document.getElementById('hidden_str7').innerHTML = "G";
			document.getElementById('hidden_str8').innerHTML = "B";
			document.getElementById('hidden_str9').innerHTML = "E";
			break;
		case 10:
			document.getElementById('hidden_str1').innerHTML = "B";
			document.getElementById('hidden_str2').innerHTML = "E";
			document.getElementById('hidden_str3').innerHTML = "A";
			document.getElementById('hidden_str4').innerHTML = "D";
			document.getElementById('hidden_str5').innerHTML = "G";
			document.getElementById('hidden_str6').innerHTML = "E";
			document.getElementById('hidden_str7').innerHTML = "A";
			document.getElementById('hidden_str8').innerHTML = "D";
			document.getElementById('hidden_str9').innerHTML = "G";
			document.getElementById('hidden_str10').innerHTML = "B";
			break;
		case 11:
			document.getElementById('hidden_str1').innerHTML = "B";
			document.getElementById('hidden_str2').innerHTML = "E";
			document.getElementById('hidden_str3').innerHTML = "A";
			document.getElementById('hidden_str4').innerHTML = "D";
			document.getElementById('hidden_str5').innerHTML = "G";
			document.getElementById('hidden_str6').innerHTML = "E";
			document.getElementById('hidden_str7').innerHTML = "A";
			document.getElementById('hidden_str8').innerHTML = "D";
			document.getElementById('hidden_str9').innerHTML = "G";
			document.getElementById('hidden_str10').innerHTML = "B";
			document.getElementById('hidden_str11').innerHTML = "E";
			break;
		case 12:
			document.getElementById('hidden_str1').innerHTML = "E";
			document.getElementById('hidden_str2').innerHTML = "E";
			document.getElementById('hidden_str3').innerHTML = "A";
			document.getElementById('hidden_str4').innerHTML = "A";
			document.getElementById('hidden_str5').innerHTML = "D";
			document.getElementById('hidden_str6').innerHTML = "D";
			document.getElementById('hidden_str7').innerHTML = "G";
			document.getElementById('hidden_str8').innerHTML = "G";
			document.getElementById('hidden_str9').innerHTML = "B";
			document.getElementById('hidden_str10').innerHTML = "B";
			document.getElementById('hidden_str11').innerHTML = "E";
			document.getElementById('hidden_str12').innerHTML = "E";
			break;
	}
}

function getCurrentTuning(numStrings){
	var tuning = new Array(numStrings);
	for(var i = 0; i < numStrings; i++){
		tuning[i] = document.getElementById('hidden_str' + (i + 1)).innerHTML;
	}
	return tuning;
}


function flipTuner(){
	var numStrings = document.getElementById('numStrings').innerHTML;
	var curTuning = new Array();
	
	for(var i = 1; i <= numStrings; i++){//Get string of current tuning
		curTuning[i - 1] = document.getElementById('hidden_str' + i).innerHTML;
	}
	
	var j = 1;
	for(var i = numStrings; i > 0; i--){//Set tuners to string in reverse order
		document.getElementById('hidden_str' + j).innerHTML = curTuning[i - 1];
		j++;
	}
}