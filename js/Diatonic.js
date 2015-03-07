//Class Diatonic
function Diatonic(root){

	///////////Constructor
	this.prototype = new LinkedList();
	
	this.root = root;
	
	this.prototype.insert('C');		this.prototype.insert('C#Db');
	this.prototype.insert('D');		this.prototype.insert('D#Eb');
	this.prototype.insert('E');		this.prototype.insert('F');
	this.prototype.insert('F#Gb');		this.prototype.insert('G');
	this.prototype.insert('G#Ab');		this.prototype.insert('A');
	this.prototype.insert('A#Bb');		this.prototype.insert('B');
	
	setEndToPointToBeginning(this);
	this.pointer = setPointer(this, root);
	
	///////////////////
	
	
	
	this.setEndToPointToBeginning = setEndToPointToBeginning;
	function setEndToPointToBeginning(diatonic){
		var current = diatonic.prototype.head;
		while(current.next !== null){
			current = current.next;
		}
		current.next = diatonic.prototype.head;
	}
	
	this.setPointer = setPointer;
	function setPointer(diatonic, root){
		var pointer = diatonic.prototype.head;
		while(pointer.value !== root){
			pointer = pointer.next;
		}
		return pointer;
	}
	
	
	
	this.getNextNote = getNextNote;
	function getNextNote(interval){//1 = 1/2 step, 2 = 1 step, 3 = 1.5 steps, 4 = 2 steps
		for(var i = 0; i < interval; i++){
			this.pointer = this.pointer.next;
		}
		return this.pointer.value;
	}
	
	
	
	
	
}