//Task 01
/*
const sum_of_numbers = (n)=>{
    var sum = 0;
    for ( let i = 1; i<=n; i+=1){
        sum = sum+i;
    }
    return sum;
};

const num = prompt("enter a number: ");
console.log(sum_of_numbers(num));
*/

//Task 02


/*
const print_book_info = (book)=>{
    console.log('"Title": ['+book.title+'],'+'"Author": ['+book.author+'],'+'"Year": ['+book.year+']');
};

let book = {
    title : "Harry Potter and the philosopher's stone",
    author : 'J. K. Rowling',
    year : '1997'
}

print_book_info(book);
*/

//Task 3
/*
const reverseArray = (array)=>{
    let new_arr = [];
    for (let i = array.length-1; i >= 0; i-=1){
        new_arr.push(array[i]);
    }
    return new_arr;

};

let array = [1,2,3,4,5];

console.log(reverseArray(array));
*/
//Task 04
/*
const countOccurences = (arr)=>{

    let freQuency = {};
    for (let i = 0; i<arr.length; i+=1){
        if (arr[i] in freQuency){
            freQuency[arr[i]] += 1;
        }
        else{
            freQuency[arr[i]] = 1;
        }
        }
    return freQuency; 
    };

let arr_of_string = ["apple","mango","lichi", "mango", "lichi"];
let result = countOccurences(arr_of_string);
console.log(result);
*/

//Task 05
/*
const multiplication_table =(n)=>{
    let multi_table = [];
    for (let i = 1; i<=n; i+=1){
        let temp = [];
        for (let j = 1; j<=n; j+=1){
            let mul = i*j;
            temp.push(mul);
        }
        multi_table.push(temp);
    }
    return (multi_table);
}
let a = (multiplication_table(3));

function show_table(values){
    console.log(values);

};
a.forEach(show_table);
*/

//Task 06
/*
const average = (array) =>{
    var sum = 0;
    var avg = 0;
    for (let i = 0; i<array.length; i++){
        sum += array[i];

    }
    avg = sum/array.length;
    return avg;
}

let arr = [1, 2, 3, 4, 5];
console.log(average(arr));
*/

//Task 07

const flatten_array = (arr)=>{

    let one_d_arr = [];
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j<arr[i].length; j++){
            one_d_arr.push(arr[i][j]);
        }
    }
    return one_d_arr;
}

let two_d_arr = [[1, 2], [3, 4]];
console.log(flatten_array(two_d_arr));
