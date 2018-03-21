//Function Tab: #2
//Write a JavaScript function that checks whether a passed string is palindrome or not?
//Go to the editor.A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

    //Answer:


function palindrome() {
    str = prompt("Enter the String to check for Palindrome");
  

    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    //return reverseStr === lowRegStr;


    if (reverseStr === lowRegStr) {
        document.writeln("true")
    }
    else {
        document.writeln("false")
    }
}



//Function Tab: #4
//Write a JavaScript function that returns a passed string with letters in alphabetical order.Go to the editor
//Example string : 'webmaster'
//Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.

    //Answer:

function makeAlphabet() {
    str = prompt("Enter some letters");

    var arr = str.split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    document.writeln(alpha)
}

//Basic Tab: #4
//Write a JavaScript program to find the area of a triangle where lengths of the 
//three of its sides are 5, 6, 7.

    //Answer:
 //gives you the area of a triangle if you know all 3 sides

function triarea() {
    alert("test")
    var side1 = prompt("Enter lenght of side1");
    var side2 = prompt("Enter the length of side2");
    var side3 = prompt("Enter the lenght of side3")
    var p = (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
    var a = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    alert("Area of the triangle is " + a);
}
//fill in side lengths below
//document.write(triarea(5,6,7));
//console.log(makeAlphabet("dryhczwa test hello"));

//Basic Tab: #8
//Write a JavaScript program where the program takes a random integer between 1 to 10,
//the user is then prompted to input a guess number.If the user input matches with guess number,
//the program will display a message "Good Work" otherwise display a message "Not matched".

    //Answer:
function numberguess() {
    x = Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10
    userResponse = prompt('Enter a Number between 1 and 10')

    if (x === userResponse) {
        alert('You guessed Correct')
    }
    else {
        alert('You guessed Wrong')
    }
    alert('Random Number was ' + x)

}

//Conditional Statements and Loops: #1
//Write a JavaScript program that accept two integers and display the larger.

    //Answer:
function displayLarger() {
    x = prompt('Enter a number');
    y = prompt('Enter another number')

    if (parseInt(x) > parseInt(y)) {
        console.log(x + ' is larger')
    }
    else {
        console.log(y + ' is larger')
    }
}


//Arrays: #3
//Write a JavaScript function to get the first element of an array.Passing a parameter 'n' will return the first 'n' elements of the array.
//Test Data :
//console.log(first([7, 9, 0, -2]));
//console.log(first([], 3));
//console.log(first([7, 9, 0, -2], 3));
//console.log(first([7, 9, 0, -2], 6));
//console.log(first([7, 9, 0, -2], -3));
//Expected Output :
//7
//[]
//[7, 9, 0]
//[7, 9, 0, -2]
//[]

    //Answer:
function myfunction(array, n) {
    var x = prompt("Enter the size of the array");
    for (i = 0; i <= x; i++) {

    }
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
}

//console.log(myfunction([1, 2, 3, 4, 5, 6, 7, 8, 9,], 7));