let min = function(a, b, c, d){
    let menor = a; 
    if(a>b || a>c || a>d){
        menor = b;
        if(b>c || b>d){
            menor = c;
            if(c>d){
                menor = d;
            }
        }
    }
    return menor;
    
}
module.exports = min;