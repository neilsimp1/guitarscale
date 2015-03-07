//Class LinkedList 
function LinkedList(){
    this.head = null;
	this.length = 0;
}
 
LinkedList.prototype = {
     
    insert:function(val){
        var item = {
            value:val,
            next:null
        }
         
        if(this.head == null){
            this.head = item;
            return;
        }
		else{
            current = this.head;
            while(current.next != null){
                current = current.next;
            }// end of while
            current.next = item;     
        }
		this.length++;
    }, 
 
     
    //Shows all elements of the linked list
    showAllElements:function(){
        if(this.head == null) return;
        var current = this.head, i = 1;
        while(current.next != null){
            console.log('The element at position ' + i + ' has value ' + current.value);
            current = current.next;
            i++;
        }
        // printing the last element
        console.log('The element at position ' + i + ' has value ' + current.value);
     },
 
 
     

    //Removes any element from the list
    //@param {Object} val
    remove:function(val){
        var current, temp;
        if(this.head == null){
            throw new Error('there are no items to remove');
        }
		else if(this.head.value == val){
            this.head = this.head.next;
        }
		else{
            current = this.head;
            while(current != null){
                if (current.next.value == val){
                    temp = current.next.next;
                    current.next = temp;
                    return;
                }
                current = current.next;
                 
            }
        }
		this.length--;
    },
 
 
     
     //inserts an element n positions from head
     //@param {Object} n
     //@param {Object} val
    insertItemNthPositionFromHead:function(n, val){
        var item = {
            value:val,
            next:null
        }, current = this.head, i = 1, temp;
         
        while(current.next != null){
            if(i == (n - 1)){
                //Insert new element at this position
                temp = current.next;
                current.next = item;
                item.next = temp;
            }
            current = current.next;
            i++;
        }
		this.length++;
    },
 
 
     
    /**
     * reverse a linked list
     */
    reverse:function(){
        var prev = null, nxt;
        while(this.head != null){
            nxt = this.head.next;
            this.head.next = prev;
			
            prev = this.head;
            this.head = nxt;
        }
    return prev;
    },
 
 
     
    /**
     * show all elements in reverse linked list
     */
    showElementsReverseLinkedList:function(){
        var firstElement = this.reverse();
        var i = 1, current;
        while(firstElement.next != null){          
            console.log('The element at position ' + i + ' has value ' + firstElement.value);
            firstElement = firstElement.next;
            i++;
        }
        console.log('The element at position ' + i + ' has value ' + firstElement.value);      
    }
}
