const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
//O(1)
strings.push('e'); //adds at the end of the array

//pop
//O(1)
strings.pop(); //remove last item at the end
strings.pop();

//unshift
//O(n)
strings.unshift('x'); //adds an item to the beginning

//splice
//O(n)
strings.splice(2, 0, 'alien'); //inserts an item

console.log(strings)