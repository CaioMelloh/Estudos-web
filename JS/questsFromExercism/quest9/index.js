let limes = ['small', 'small', 'large', 'medium', 'small'];

let wedges = 25;

function limesToCut(wedgesNeeded, limes) {
    let i = 0;
    let count = 0;
    let wedgesLemon = 0;

    while(i < limes.length){

        switch (limes[i]){
            case 'small':
                wedgesLemon = 6;
                break;
            case 'medium':
                wedgesLemon = 8;
                break;
            case 'large':
                wedgesLemon = 10;
                break;
        }

        count+= wedgesLemon;
        if(count >= wedgesNeeded){
            break;
        }

        i++;

    }
        return i+1;
}

console.log(limesToCut(25, limes));