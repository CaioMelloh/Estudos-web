let velocity = 150

function desacelerando(velocity, print){
    let freio = 20

    while(velocity > 0){
        if((velocity - 20) > 0 ){velocity-=freio}

        else{velocity = 0;}
        
        print(velocity)
    
    }
}