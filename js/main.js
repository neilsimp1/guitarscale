//Imports
document.writeln("<script type='text/javascript' src='js/noteMode/main.js'></script>");
document.writeln("<script type='text/javascript' src='js/tunerMode/main.js'></script>");


//Main
window.onload = function(){document.getElementById('modeChooserDiv').classList.remove('slide');}
$(document).ready(function(){	
	$(document).change(function(){
		var mode = document.getElementById('hidden_appMode').innerHTML;
		
		switch(mode){
			case 'S':
				note_main();
				break;
			case 'C':
				// canvas_main();
				break;
			case 'T':
				tuner_main();
				break;
		}
	});
});


function setMode(mode){
	document.getElementById('hidden_appMode').innerHTML = mode;
	
	var url = '';
	switch(mode){
		case 'S':
			url = "noteMode.html";
			break;
		case 'C':
			url = "clickMode.html";
			break;
		case 'T':
			url = "tunerMode.html";
			break;
		
	}
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			var html = xhr.responseText;
			document.getElementById('div_content').innerHTML = html;
			$(document).trigger('change');
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}


//////Shared functions

//Button hover effects
function imgBrighter(img){
	var src = img.src;
	src = src.substring(0, src.length - 5);
	src = src + 'b.png';
	
	img.setAttribute('src', src);
}
function imgNormal(img){
	var src = img.src;
	src = src.substring(0, src.length - 5);
	src = src + 'n.png';
	
	img.setAttribute('src', src);
}
function imgDarker(img){
	var src = img.src;
	src = src.substring(0, src.length - 5);
	src = src + 'd.png';
	
	img.setAttribute('src', src);
}