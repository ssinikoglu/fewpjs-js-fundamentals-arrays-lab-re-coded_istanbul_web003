const  append= ["Milo", "Otis","Garfield"];
const prepend = append.slice();
const removeLast = append.slice();
const removeFirst = append.slice();
append.push("Odie");
prepend.unshift("Odie");
removeFirst.splice(0,1);
removeLast.splice(2);
console.log(append);
console.log(prepend);
console.log(removeLast);
console.log(removeFirst);




