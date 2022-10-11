function multiplyBy(a, b, multi){
    
    return multi(a, b);
}

let mt = (a, b) =>{return a*b;}

console.log(multiplyBy(6, 3, mt));
