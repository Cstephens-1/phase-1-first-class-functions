function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function eatIt(){
        
    };
}

function returnsAnAnonymousFunction(){
    return function(){

    };
}