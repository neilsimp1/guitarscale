//Class GString
function GString(pitch, num){
	this.pitch = pitch;
	this.num = num;
	
	this.getFretPitch = getFretPitch;
	function getFretPitch(fret){
		if(fret >= 12) fret %= 12;
		switch(pitch){
			case "C":
				switch(fret){
					case 0:
						return "C";
						break;
					case 1:
						return "C#Db";
						break;
					case 2:
						return "D";
						break;
					case 3:
						return "D#Eb";
						break;
					case 4:
						return "E";
						break;
					case 5:
						return "F";
						break;
					case 6:
						return "F#Gb";
						break;
					case 7:
						return "G";
						break;
					case 8:
						return "G#Ab";
						break;
					case 9:
						return "A";
						break;
					case 10:
						return "A#Bb";
						break;
					case 11:
						return "B";
						break;
					default:
						return "C";
				}
				break;
			case "C#Db":
				switch(fret){
					case 0:
						return "C#Db";
						break;
					case 1:
						return "D";
						break;
					case 2:
						return "D#Eb";
						break;
					case 3:
						return "E";
						break;
					case 4:
						return "F";
						break;
					case 5:
						return "F#Gb";
						break;
					case 6:
						return "G";
						break;
					case 7:
						return "G#Ab";
						break;
					case 8:
						return "A";
						break;
					case 9:
						return "A#Bb";
						break;
					case 10:
						return "B";
						break;
					case 11:
						return "C";
						break;
					default:
						return "C#Db";
				}
				break;
			case "D":
				switch(fret){
					case 0:
						return "D";
						break;
					case 1:
						return "D#Eb";
						break;
					case 2:
						return "E";
						break;
					case 3:
						return "F";
						break;
					case 4:
						return "F#Gb";
						break;
					case 5:
						return "G";
						break;
					case 6:
						return "G#Ab";
						break;
					case 7:
						return "A";
						break;
					case 8:
						return "A#Bb";
						break;
					case 9:
						return "B";
						break;
					case 10:
						return "C";
						break;
					case 11:
						return "C#Db";
						break;
					default:
						return "D";
				}
				break;
			case "D#Eb":
				switch(fret){
					case 0:
						return "D#Eb";
						break;
					case 1:
						return "E";
						break;
					case 2:
						return "F";
						break;
					case 3:
						return "F#Gb";
						break;
					case 4:
						return "G";
						break;
					case 5:
						return "G#Ab";
						break;
					case 6:
						return "A";
						break;
					case 7:
						return "A#Bb";
						break;
					case 8:
						return "B";
						break;
					case 9:
						return "C";
						break;
					case 10:
						return "C#Db";
						break;
					case 11:
						return "D";
						break;
					default:
						return "D#Eb";
				}
				break;
			case "E":
				switch(fret){
					case 0:
						return "E";
						break;
					case 1:
						return "F";
						break;
					case 2:
						return "F#Gb";
						break;
					case 3:
						return "G";
						break;
					case 4:
						return "G#Ab";
						break;
					case 5:
						return "A";
						break;
					case 6:
						return "A#Bb";
						break;
					case 7:
						return "B";
						break;
					case 8:
						return "C";
						break;
					case 9:
						return "C#Db";
						break;
					case 10:
						return "D";
						break;
					case 11:
						return "D#Eb";
						break;
					default:
						return "E";
				}
				break;
			case "F":
				switch(fret){
					case 0:
						return "F";
						break;
					case 1:
						return "F#Gb";
						break;
					case 2:
						return "G";
						break;
					case 3:
						return "G#Ab";
						break;
					case 4:
						return "A";
						break;
					case 5:
						return "A#Bb";
						break;
					case 6:
						return "B";
						break;
					case 7:
						return "C";
						break;
					case 8:
						return "C#Db";
						break;
					case 9:
						return "D";
						break;
					case 10:
						return "D#Eb";
						break;
					case 11:
						return "E";
						break;
					default:
						return "F";
				}
				break;
			case "F#Gb":
				switch(fret){
					case 0:
						return "F#Gb";
						break;
					case 1:
						return "G";
						break;
					case 2:
						return "G#Ab";
						break;
					case 3:
						return "A";
						break;
					case 4:
						return "A#Bb";
						break;
					case 5:
						return "B";
						break;
					case 6:
						return "C";
						break;
					case 7:
						return "C#Db";
						break;
					case 8:
						return "D";
						break;
					case 9:
						return "D#Eb";
						break;
					case 10:
						return "E";
						break;
					case 11:
						return "F";
						break;
					default:
						return "F#Gb";
				}
				break;
			case "G":
				switch(fret){
					case 0:
						return "G";
						break;
					case 1:
						return "G#Ab";
						break;
					case 2:
						return "A";
						break;
					case 3:
						return "A#Bb";
						break;
					case 4:
						return "B";
						break;
					case 5:
						return "C";
						break;
					case 6:
						return "C#Db";
						break;
					case 7:
						return "D";
						break;
					case 8:
						return "D#Eb";
						break;
					case 9:
						return "E";
						break;
					case 10:
						return "F";
						break;
					case 11:
						return "F#Gb";
						break;
					default:
						return "G";
				}
				break;
			case "G#Ab":
				switch(fret){
					case 0:
						return "G#Ab";
						break;
					case 1:
						return "A";
						break;
					case 2:
						return "A#Bb";
						break;
					case 3:
						return "B";
						break;
					case 4:
						return "C";
						break;
					case 5:
						return "C#Db";
						break;
					case 6:
						return "D";
						break;
					case 7:
						return "D#Eb";
						break;
					case 8:
						return "E";
						break;
					case 9:
						return "F";
						break;
					case 10:
						return "F#Gb";
						break;
					case 11:
						return "G";
						break;
					default:
						return "G#Ab";
				}
				break;
			case "A":
				switch(fret){
					case 0:
						return "A";
						break;
					case 1:
						return "A#Bb";
						break;
					case 2:
						return "B";
						break;
					case 3:
						return "C";
						break;
					case 4:
						return "C#Db";
						break;
					case 5:
						return "D";
						break;
					case 6:
						return "D#Eb";
						break;
					case 7:
						return "E";
						break;
					case 8:
						return "F";
						break;
					case 9:
						return "F#Gb";
						break;
					case 10:
						return "G";
						break;
					case 11:
						return "G#Ab";
						break;
					default:
						return "A";
				}
				break;
			case "A#Bb":
				switch(fret){
					case 0:
						return "A#Bb";
						break;
					case 1:
						return "B";
						break;
					case 2:
						return "C";
						break;
					case 3:
						return "C#Db";
						break;
					case 4:
						return "D";
						break;
					case 5:
						return "D#Eb";
						break;
					case 6:
						return "E";
						break;
					case 7:
						return "F";
						break;
					case 8:
						return "F#Gb";
						break;
					case 9:
						return "G";
						break;
					case 10:
						return "G#Ab";
						break;
					case 11:
						return "A";
						break;
					default:
						return "A#Bb";
				}
				break;
			case "B":
				switch(fret){
					case 0:
						return "B";
						break;
					case 1:
						return "C";
						break;
					case 2:
						return "C#Db";
						break;
					case 3:
						return "D";
						break;
					case 4:
						return "D#Eb";
						break;
					case 5:
						return "E";
						break;
					case 6:
						return "F";
						break;
					case 7:
						return "F#Gb";
						break;
					case 8:
						return "G";
						break;
					case 9:
						return "G#Ab";
						break;
					case 10:
						return "A";
						break;
					case 11:
						return "A#Bb";
						break;
					default:
						return "B";
				}
				break;
			
		}
	}
}