function receivesAFunction(work) {
    work();
}


function returnsANamedFunction () {
    return function namedFunction() {};
}
    

function returnsAnAnonymousFunction() { 
    return function () {};
}
