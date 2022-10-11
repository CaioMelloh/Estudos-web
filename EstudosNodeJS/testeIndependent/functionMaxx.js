let max = function(a, b, c, d){
    let maior= a;
    if(a<b || a<c || a<d){
        maior = b
        if(b<c || b<d){
            maior = c
            if(c<d){
                maior = d
            }
        }
    }

    return maior;
}
module.exports = max;