//create a function that reverses a string
//'hi my name is'
//'si eman ym ih'

//turn into array ['h', 'i', 'm', 'y' ...]
//left, right
//while left < right swap items


//O(n)
function reverse(str){

    //check the input first
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm that is not good';
    }

    //maybe call it better backwards
    let arr = str.split('');


    let left = 0;
    let right = str.length - 1;

    while (left < right){
        //swap
        swap(arr, left, right);
        left++;
        right--;
    }

    return arr.join('');

}

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('')

//or 

const reverse4 = str => [...str].reverse().join('');

console.log(reverse("Hi, I'm Anastasiya"));
console.log(reverse2("Hi, I'm Anastasiya"));
console.log(reverse3("Hi, I'm Anastasiya"));
console.log(reverse4("Hi, I'm Anastasiya"));