

let arr = [1,2,3,4,5,6,7,8,9];

let odd = arr.filter(eL=>eL%2==1);
let oddqubes = arr.filter(eL=>eL%2==1).map(eL=>eL**3);
console.log(odd);
console.log(oddqubes);

